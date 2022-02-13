const Beds = require('../models/Beds');
const router = require("express").Router();

router.post("/beds", async (req, res) => {
    try{
        const newBed = await new Beds({
            amount: req.body.amount,
            hno: req.body.hno,
            no: req.body.no,
            lane: req.body.lane,
            district: req.body.district,
            area: req.body.area,
            province: req.body.province,
            zipcode: req.body.zipcode,
            user_id: req.body.user_id
        });

        const New_Beds = await newBed.save();
        res.status(203).json({ status: true, message: "ลงทะเบียนเตียงสำเร็จ!" })
    }catch(err) {
        res
      .status(500)
      .json({
        status: false,
        message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
      });
    }
});

router.get('/bedsbyusers/:id', async (req, res) =>{
    try{
        const beds = await Beds.find({user_id: req.params.id})
        if(beds.length === 0){
            res.status(203).json({ status: false, message: "ไม่มีข้อมูล!"})
        }else{
            res.status(203).json({ status: true, message: "การค้นหาสำเร็จ!", info: {beds}})
        }
    }catch(err) {
        res
      .status(500)
      .json({
        status: false,
        message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
      });
    }
});

router.get('/beds/:id', async (req, res) => {
    try{
        const bedsid = await Beds.findById(req.params.id);
        if(bedsid.length === 0){
            res.status(203).json({ status: false, message: "ไม่มีข้อมูล!"})
        }else{
            res.status(203).json({ status: true, message: "การค้นหาสำเร็จ!", info: bedsid})
        }
    } catch (err) {
        res
      .status(404)
      .json({
        status: false,
        message: "ไม่มีข้อมูลหรือเกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
      });
    }
});

router.get('/bedsready', async (req, res) => {
    try{
        const bedsready = await Beds.find({amount: {$gt: 0}});
        if(bedsready.length === 0){
            res.status(203).json({ status: false, message: "ไม่มีเตียงที่พร้อมให้บริการ!"})
        }else{
            res.status(203).json({ status: true, message: "การค้นหาสำเร็จ!", info: {bedsready}})
        }
    }catch(err) {
        res
      .status(404)
      .json({
        status: false,
        message: "ไม่มีข้อมูลหรือเกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
      });
    }
});

module.exports = router;