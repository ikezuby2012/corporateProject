const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const walletSchema = new Schema({
    balance: {
        type: Number,
        default: 0
    },
    organizationId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "organization"
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Wallet = model("Wallet", walletSchema);
module.exports = Wallet;