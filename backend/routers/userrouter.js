const express = require("express");
const router = express.Router();
const {Userlogin,UserCreate} = require("../controllers/userController")

router.post("/login",Userlogin);
router.post("/",UserCreate);

module.exports = router;