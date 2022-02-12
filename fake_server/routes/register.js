const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req,res) =>{
    try{
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.findOne({email:req.body.email});
        const idCard = await User.findOne({id_Card: req.body.idcard})
        if(user){
            res.status(400).json({"status": false, "message": "อีเมลนี้เคยมีถูกใช้ซ้ำ"});
        }else if(idCard){
            res.status(400).json({"status": false, "message": "เลขบัตรประจำตัวตัวมีการใช้ซ้ำ"});
        }else{
            // create new user
            const newUser = await new User({
                email: req.body.email,
                password: hashPassword,
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                id_Card: req.body.idcard,
                line_id: req.body.line
            });

            // save user and respond
            const New_User = await newUser.save();
            res.status(200).json({"status": true, "message": "ลงทะเบียนสำเร็จ"})
        }
        
    } catch(err){
        console.log(err)
    }
});

exports.router = router;