const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.mongodb).then(() => {
    console.log("db connected")
}).catch((err) => {
    console.log("db error: " + err)
})

module.exports = mongoose