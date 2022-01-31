const express = require("express");
const {
    createOrg, getAllOrgs, getOrg, deleteOrg, updateOrg, getOrgsStat, checkAdmin
} = require("../controllers/orgController");
const { protect, restrictUser } = require("../controllers/authController");

const router = express.Router();

router.get("/:id", getOrg);
router.use(protect, restrictUser("user"));

router.route('/:id')
    .patch(updateOrg).delete(deleteOrg);

router.get("/admin/:id", checkAdmin);

router.route("/")
    .get(getAllOrgs).post(createOrg);

module.exports = router;