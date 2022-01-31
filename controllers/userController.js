const User = require("../models/userModel");

const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

// update eligibility status after 90 days
exports.updateEligibility = catchAsync(async (req, res, next) => {
    let now = new Date.now();
    now = new Date(now.setMonth(new Date().getMonth() - 3));

    //return all users who have existed for more than 90 days
    let users = await User.aggregate([
        {
            $match: {
                created_at: {
                    $gte: now
                }
            }
        },
        {
            $set: {
                eligibilityStatus: true
            }
        },
        { multi: true }
    ]);

    if (!users) {
        return next(new AppError("no user can be found", 401));
    }

    res.status(201).json({
        status: "success",
        data: users
    });
}); 