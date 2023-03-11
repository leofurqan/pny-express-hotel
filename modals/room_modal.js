const mongoose = require("../db")
const roomSchema = require("../schema/room_schema")

const roomModal = new mongoose.model('rooms', roomSchema)

module.exports = roomModal