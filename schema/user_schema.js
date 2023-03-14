const mongoose = require("../db")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    'user_name': String,
    'user_email': String,
    'user_password': String,
})

userSchema.pre("save", function(next) {
    this.user_password = bcrypt.hashSync(this.user_password, 10)
    next()
})

module.exports = userSchema