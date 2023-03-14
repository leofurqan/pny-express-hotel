const mongoose = require("../db")
const userSchema = require("../schema/user_schema")

const userModal = new mongoose.model('users', userSchema)

module.exports = userModal