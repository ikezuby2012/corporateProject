const mongoose = require("mongoose");
const Organization = require("../models/organizationModel");

const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.getAllOrgs = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Organization.find(), req.query)
        .filter().sort().limitFields().paginate();
    const organizations = await features.query;

    res.status(200).json({
        status: 'success',
        results: organizations.length,
        data: organizations
    });
});

exports.createOrg = catchAsync(async (req, res, next) => {

    const newOrg = await Organization.create({
        name: req.body.name,
        num_of_members: req.body.num_of_members,
        admin: req.body.admin
    });

    res.status(201).json({
        status: "success",
        data: newOrg
    });
});

exports.updateOrg = catchAsync(async (req, res, next) => {
    const org = await Organization.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        reg_no: req.body.reg_no,
        account_name: req.body.account_name,
        account_number: req.body.account_number,
        bank_name: req.body.bank_name
    }, {
        new: true,
        runValidators: true
    });

    res.status(201).json({
        status: "success",
        data: org
    });
});

exports.getOrg = catchAsync(async (req, res, next) => {
    const org = await Organization.findById(req.params.id)
        .populate("members").populate("admin");

    if (!org) {
        return next(new AppError('no organization found with that ID', 404));
    }

    res.status(201).json({
        status: "success",
        data: org
    });
});

exports.deleteOrg = catchAsync(async (req, res, next) => {
    await Organization.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: "success",
        data: null
    });

});
//check if admin has already created a organization
exports.checkAdmin = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const data = await Organization.aggregate([
        {
            $match: {
                "admin": mongoose.Types.ObjectId(id)
            }
        },
        {
            $sort: {
                created_at: -1
            }
        }
    ]);

    if (!data) {
        return next(new AppError("could not fetch data!", 401));
    }

    res.status(200).json({
        status: "success",
        data
    })
});

exports.getOrgsStat = catchAsync(async (req, res, next) => {

})