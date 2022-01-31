const Flutterwave = require('flutterwave-node-v3');
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Organization = require("../models/organizationModel");
const Transaction = require("../models/transactionModel");
const Wallet = require("../models/walletModel");

const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

//to validate user wallet
const validateWalletFlutterWave = catchAsync(async (req, res, next) => {
    const { organizationId } = req.body;
    const checkWallet = await Wallet.findOne({ organizationId });
    //if wallet does not exist create wallet
    if (!checkWallet) {
        const wallet = await Wallet.create(req.body);
        return wallet;
    }
    return checkWallet;
});

//to create sub account
exports.createAdminFlutterAccount = catchAsync(async (req, res, next) => {
    const org = await Organization.findById(req.params.id);
    console.log(org);
    validateWallet(req.body);

    try {
        const payload = {
            "account_bank": req.body.account_bank,
            "account_number": req.body.account_number,
            "business_name": req.body.Organization,
            "business_email": req.body.email,
            "business_contact": req.body.name,
            "business_contact_mobile": "",
            "country": "NG",
            "split_value": 0
            // // "meta": [
            // //     {
            // //         "meta_name": "mem_adr",
            // //         "meta_value": "0x16241F327213"
            // //     }
            // // ],
            // "split_type": "percentage",
        }
        const response = await flw.Subaccount.create(payload);
        if (!response) {
            return next(new AppError("something went wrong, no response!", 403));
        }
        const updatedOrg = await Organization.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(201).json({
            status: "success",
            data: response
        })
    } catch (error) {
        console.log(error)
    }

});

exports.depositBillFlutterWave = catchAsync(async (req, res, next) => {
    try {

        const payload = {
            "amount": "100", //This is the amount to be charged.
            "account_bank": "044", //This is the Bank numeric code. You can get a list of supported banks and their respective codes Here: https://developer.flutterwave.com/v3.0/reference#get-all-banks
            "account_number": "0690000037",
            "currency": "NGN",
            "email": "olufemi@flw.com",
            "phone_number": "0902620185", //This is the phone number linked to the customer's mobile money account
            "fullname": "Olufemi Obafunmiso"
        }

        const response = await flw.Charge.ng(payload)
        console.log(response);

        res.status(201).json({
            status: "success",
            data: response
        })
    } catch (error) {
        console.log(error);

        res.status(403).json({
            status: "failed",
            message: error.message
        })
    }
});

//manual transaction