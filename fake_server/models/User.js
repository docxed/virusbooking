const mongoose = require("mongoose");

const UserSchama = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        max: 50,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        min: 6,
    },
    firstName:{
        type:String,
        required: true,
        max:50
    },
    lastName:{
        type:String,
        required: true,
        max:50
    },
    id_Card:{
        type:String,
        required: true,
        min: 13,
        max: 13
    },
    line_id:{
        type:String,
        required: true,
        max: 50
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", UserSchama);