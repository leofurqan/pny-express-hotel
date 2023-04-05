const mongoose = require("../db")

const roomSchema = new mongoose.Schema({
    'room_no': Number,
    'room_type': String,
    'room_price': Number,
    'is_ac': Boolean,
    'is_sa': Boolean,
    'is_sofa': Boolean,
    'is_dt': Boolean,
    'is_tv': Boolean
})

module.exports = roomSchema