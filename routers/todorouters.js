const express = require("express");
const router = express.Router();
const DotoOpertion = require("../controllers/services");
const {middle,joiValdates,joiValdatesPatch} = require("./valdates/mid");

router.route("/info").post(middle(joiValdates),DotoOpertion.postTodoData);
router.route("/info/:id").get(DotoOpertion.getByIdTodoData);
router.route("/info").get(DotoOpertion.getAllTodoData);
router.route("/info/:id").patch(middle(joiValdatesPatch),DotoOpertion.patchTodoData);

module.exports = router;