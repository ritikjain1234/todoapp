const express = require("express");
const router = express.Router();
const DotoOpertion = require("../controllers/services");


router.route("/info").post(DotoOpertion.postTodoData);
router.route("/info/:id").get(DotoOpertion.getByIdTodoData);
router.route("/info").get(DotoOpertion.getAllTodoData);
router.route("/info/:id").patch(DotoOpertion.patchTodoData);

module.exports = router;