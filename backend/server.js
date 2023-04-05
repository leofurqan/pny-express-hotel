const express = require("express")
const app = express()
const exphb = require("express-handlebars")
const router = require("./routes/route")
const path = require("path")
const jwt = require("jsonwebtoken")
require('dotenv').config()
require("./db")

app.use("/", router)

app.engine('handlebars', exphb.engine({
    extname: 'handlebars',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/include/'
}))

app.set('view engine', 'handlebars');
app.set('views', './views');

// const token = jwt.sign({user_id: '007'}, process.env.secret, {expiresIn: 3600})
// console.log(token)

app.listen(process.env.port, () => {
    console.log("server connected...")
})