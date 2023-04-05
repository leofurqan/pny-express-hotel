const mongoose = require("../db")
const guestSchema = require("../schema/guest_schema")

const guestModel = new mongoose.model('guests', guestSchema)

module.exports = guestModel