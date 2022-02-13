const Bedsdealing = require('../models/Bedsdealing');
const router = require("express").Router();

router.post('/bedsdealing', async (req, res) =>{
    try{
        const newdealing = await new Bedsdealing({
            date: new Date,
            bed_id: req.body.bed_id,
            user_id: req.body.user_id
        });
        
        const New_dealing = await newdealing.save();
        res.status(201).json({ status: true, message: "จองสำเร็จ" });
    } catch (err) {
        res
      .status(500)
      .json({
        status: false,
        message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
      });
    }
});

router.get('/bedsdealingbybeds/:id', async (req, res) => {
    try{
        const dealing = await Bedsdealing.find({bed_id: req.params.id})
        if(dealing.length === 0){
            res.status(203).json({ status: false, message: "ไม่มีข้อมูล!"})
        }else{
            res.status(203).json({ status: true, message: "การค้นหาสำเร็จ!", info: {dealing}})
        }
    }catch (err) {
        res
      .status(500)
      .json({
        status: false,
        message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
      });
    }
});

module.exports = router;


