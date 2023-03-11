const mongoose = require("../db")

const guestSchema = new mongoose.Schema({
    'guest_name': String,
    'guest_age': Number,
    'guest_phone': Number,
    'guest_room_id': String,
    'date': Date
})

module.exports = guestSchema