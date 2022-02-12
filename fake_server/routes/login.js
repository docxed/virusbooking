const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");

        const {...others } = user._doc;
        res.status(200).json({"status": true, "message": "เข้าสู่ระบบสำเร็จ", "info": {...others}});
    } catch(err) {
        res.status(500).json(err);
    }
   
});

exports.router = router;