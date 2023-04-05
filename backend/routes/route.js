const express = require("express")
const router = express.Router()
const parser = require("body-parser")
const roomModal = require("../modals/room_modal")
const methodOverride = require("method-override")
const roomController = require("../controllers/roomController")
const guestController = require("../controllers/guestController")
const userController = require("../controllers/userController")
const auth = require("../middleware/auth")
const cookieParser = require('cookie-parser')
const cors = require('cors')

router.use(cors())

const urlencoded = parser.urlencoded({ extended: false })
const json = parser.json()
router.use(methodOverride('_method'))

router.use(cookieParser())

router.get("/login", userController.login)
router.get("/signup", userController.signup)
router.post("/insertUser", urlencoded, userController.insertUser)
router.post("/loginUser", json, userController.loginUser)
router.get("/logout", auth, userController.logout)

router.get("/", auth, (req, res) => {
    roomModal.find().count().then((r) => {
    res.render("home", {room_count: r, user_name: req.user_name})
    }).catch((err) => {
        console.log("room count: " + err)
    }) 
})

router.get("/rooms", auth, roomController.getRooms)
router.get("/add_room", roomController.addRoom)
router.post('/insert_room', urlencoded, roomController.insertRoom)
router.get('/edit_room/:id', roomController.editRoom)

router.put('/update_room/:id', (req, res) => {
    roomModal.findByIdAndUpdate(req.params.id, req.body).then((r) => {
        res.redirect("/rooms")
    }).catch((err) => {
        console.log("update failed: " + err)
    })
})

router.delete("/delete_room/:id", (req, res) => {
    roomModal.findOneAndRemove(req.params.id).then((r) => {
        res.redirect("/rooms")
    }).catch((err) => {
        console.log("delete failed: " + err)
    })
})

router.get("/guests", auth, guestController.getGuests)
router.get("/add_guest", guestController.addGuest)
router.post("/insert_guest", urlencoded, guestController.insertGuest)

module.exports = router