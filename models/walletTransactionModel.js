const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const walletTransactionSchema = new Schema({
    amount: {
        type: Number,
        default: 0
    },
    user: {
        type: String,
        ref: "user",
        required: true,
    },
    card_number: {
        type: String,
    },
    cvc: {
        type: String
    },
    card_expiry_date: {
        type: String
    },
    isInflow: { type: Boolean },
    paymentMethod: {
        type: String,
        default: "flutterwave"
    },
    currency: {
        type: String,
        required: [true, "currency is required"],
        enum: ["NGN", "USD", "EUR", "GBP"],
        default: "NGN"
    },
    confirmPayment: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        required: [true, "payment status is required"],
        enum: ["successful", "pending", "failed"],
    },
}, { timestamp: true });

const WalletTransaction = model("WalletTransaction", walletTransactionSchema);
module.exports = WalletTransaction;