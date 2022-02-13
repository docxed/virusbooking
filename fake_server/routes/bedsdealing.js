const Bedsdealing = require("../models/Bedsdealing");
const User = require("../models/User");
const Beds = require("../models/Beds");
const router = require("express").Router();
var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

router.get("/bedsdealing", async (req, res) => {
  try {
    const dealingall3 = await Bedsdealing.find();
    const user = await User.find();
    const list = [];

    for (let i = 0; i < dealingall3.length; i++) {
      let name;
      for (let y = 0; y < user.length; y++) {
        if (dealingall3[i].user_id == user[y]._id + "") {
          name = user[y];
        }
      }
      list.push({
        _id: dealingall3[i]._id,
        bed_id: dealingall3[i].bed_id,
        user_id: dealingall3[i].user_id,
        user: name,
      });
    }

    res
      .status(200)
      .json({ status: true, message: "การค้นหาสำเร็จ!", info: list });
  } catch (err) {}
});

router.post("/bedsdealing", async (req, res) => {
  try {
    const newdealing = await new Bedsdealing({
      date: new Date(),
      bed_id: req.body.bed_id,
      user_id: req.body.user_id,
    });

    const oldBeds = await Beds.findById(req.body.bed_id);

    if (oldBeds.amount === 0) {
      res
        .status(201)
        .json({ status: false, message: "ไม่สามารถจองได้ เนื่องจากเตียงเต็ม" });
    } else {
      const update_Beds = await Beds.findByIdAndUpdate(
        req.body.bed_id,
        {
          $set: { amount: oldBeds.amount - 1 },
        },
        { new: true }
      );

      if (oldBeds.amount === 0) {
        res
          .status(201)
          .json({
            status: false,
            message: "ไม่สามารถจองได้ เนื่องจากเตียงหมด",
          });
      } else {
        const update_Beds = await Beds.findByIdAndUpdate(
          req.body.bed_id,
          {
            $set: { amount: oldBeds.amount - 1 },
          },
          { new: true }
        );

        const New_dealing = await newdealing.save();
        res.status(201).json({ status: true, message: "จองสำเร็จ" });
      }
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
    });
  }
});

router.get("/bedsdealingbybeds/:id", async (req, res) => {
  try {
    const dealingbybed = await Bedsdealing.find({ bed_id: req.params.id });
    if (dealingbybed.length === 0) {
      res.status(203).json({ status: false, message: "ไม่มีข้อมูล!" });
    } else {
      res.status(203).json({
        status: true,
        message: "การค้นหาสำเร็จ!",
        info: { dealingbybed },
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
    });
  }
});

router.get("/bedsdealingbyusers/:id", async (req, res) => {
  try {
    const dealingbyuser = await Bedsdealing.find({ user_id: req.params.id });
    if (dealingbyuser.length === 0) {
      res.status(203).json({ status: false, message: "ไม่มีข้อมูล!" });
    } else {
      res.status(203).json({
        status: true,
        message: "การค้นหาสำเร็จ!",
        info: { dealingbyuser },
      });
    }
  } catch (err) {}
});

module.exports = router;
