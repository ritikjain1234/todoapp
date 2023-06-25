const express = require("express");
const router = express.Router();
const DotoOpertion = require("../controllers/services");
const { middle, joiValdates, joiValdatesPatch } = require("./valdates/mid");

router.post("/info", middle(joiValdates), DotoOpertion.postTodoData);
router.get("/info/:id", DotoOpertion.getByIdTodoData);
router.get("/info", DotoOpertion.getAllTodoData);
router.patch("/info/:id", middle(joiValdatesPatch), DotoOpertion.patchTodoData);

module.exports = router;
