const express = require("express")
const app = express()
const exphb = require("express-handlebars")
const router = require("./routes/route")
require("./db")

app.use("/", router)
exphb.registerHelper
app.engine('handlebars', exphb.engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(3000, () => {
    console.log("server connected...")
})