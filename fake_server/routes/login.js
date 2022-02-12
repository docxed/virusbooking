const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(203).json({
        status: false,
        message: "user not found"
      });

    const validPassword = await bcrypt.compare(
      req.body.pass,
      user.pass
    );
    !validPassword && res.status(203).json({
        status: false,
        message: "wrong password"
      });

    const { ...others } = user._doc;
    res
      .status(200)
      .json({
        status: true,
        message: "เข้าสู่ระบบสำเร็จ",
        info: { ...others },
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.router = router;
