const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.pass, salt);

    const user = await User.findOne({ email: req.body.email });
    const idCard = await User.findOne({ idcard: req.body.idcard });
    if (user) {
      res
        .status(203)
        .json({ status: false, message: "อีเมลนี้เคยมีถูกใช้ซ้ำ" });
    } else if (idCard) {
      res
        .status(203)
        .json({ status: false, message: "เลขบัตรประจำตัวตัวมีการใช้ซ้ำ" });
    } else {
      // create new user
      const newUser = await new User({
        email: req.body.email,
        pass: hashPassword,
        fname: req.body.fname,
        lname: req.body.lname,
        idcard: req.body.idcard,
        lineid: req.body.lineid,
      });

      // save user and respond
      const New_User = await newUser.save();
      res.status(201).json({ status: true, message: "ลงทะเบียนสำเร็จ" });
    }
  } catch (err) {
    console.log(err);
  }
});

exports.router = router;
