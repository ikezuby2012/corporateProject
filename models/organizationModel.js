const mongoose = require("mongoose");
const validator = require("validator");

const { Schema, model } = mongoose;

const orgSchema = new Schema({
    name: {
        type: String,
        required: [true, "CS must have a name!"]
    },
    email: {
        type: String,
        // required: [true, "please provide an email address!"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    },
    phone_number: {
        type: String,
    },
    address: {
        type: String
    },
    reg_no: {
        type: String,
    },
    account_name: {
        type: String
    },
    account_number: {
        type: String
    },
    num_of_members: {
        type: Number,
        min: [10, "the minimum is 10 members"],
        max: [500, "the maximum is 500 persons"]
    },
    admin: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    members: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: [true, "member must have an organization"]
    },
    bank_name: {
        type: String
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    //flutter wave sub account id
    sub_account_id: {
        type: String
    },
    plans: [Number]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

orgSchema.pre(/^find/, function (next) {
    this.populate({
        path: "members",
        select: "name email role"
    })
    next();
});

const Organization = model("Organization", orgSchema);
module.exports = Organization;