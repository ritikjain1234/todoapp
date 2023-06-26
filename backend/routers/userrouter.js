const express = require("express");
const router = express.Router();
const {Userlogin,UserCreate} = require("../controllers/userController")
const {userValdates,joiValdatesUsercreate} = require("./valdates/mid")

router.post("/login",Userlogin);
router.post("/",userValdates(joiValdatesUsercreate),UserCreate);

module.exports = router;