const express = require("express")
const app = express()
const exphb = require("express-handlebars")
const router = require("./routes/route")
const path = require("path")
require("./db")

app.use("/", router)

app.engine('handlebars', exphb.engine({
    extname: 'handlebars',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/include/'
}))

app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(3000, () => {
    console.log("server connected...")
})