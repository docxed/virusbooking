const mongoose = require('mongoose');

const UserSchama = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        max: 50,
        unique: true,
    },
    pass:{
        type:String,
        required: true,
        min: 6,
    },
    fname:{
        type:String,
        required: true,
        max:50
    },
    lname:{
        type:String,
        required: true,
        max:50
    },
    idcard:{
        type:String,
        min: 13,
        max: 13
    },
    lineid:{
        type:String,
        required: false,
        max: 50
    },
    phone:{
        type:String,
        required: true,
        min: 10,
        max: 10
    },
    booking:{
        type: Array,
        local: {
            type: String,
        },
        date: {
            type:Date
        }
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", UserSchama);