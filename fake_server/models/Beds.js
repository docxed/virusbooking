const mongoose = require('mongoose');

const BedsSchema = new mongoose.Schema(
    {
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("Beds", BedsSchema);