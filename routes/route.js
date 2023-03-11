const express = require("express")
const router = express.Router()
const parser = require("body-parser")
const roomModal = require("../modals/room_modal")
const methodOverride = require("method-override")

router.use(parser.urlencoded({ extended: false }))
router.use(parser.json())
router.use(methodOverride('_method'))

router.get("/", (req, res) => {
    res.render("home")
})

router.get("/rooms", (req, res) => {
    roomModal.find().lean().then((r)=>{
        res.render("rooms", {rooms: r})
    }).catch((err) => {
        console.log("room find: " + err)
    })
})

router.get("/add_room", (req, res) => {
    res.render("add_room")
})

router.post('/insert_room', (req, res) => {
    const room = new roomModal(req.body)

    room.save().then((r) => {
        console.log("room insert: " + r)
        res.redirect("/rooms")
    }).catch((err) => {
        console.log("room insert: " + err)
    })
})

router.get('/edit_room/:id', (req, res) => {
    roomModal.findById(req.params.id).lean().then((r) => {
        res.render("edit_room", {room: r,  helpers: {
            eq_sb() { return r.room_type == 'single_bed'; },
            eq_db() { return r.room_type == 'double_bed'; }
        }
    })
    }).catch((err) => {
        console.log("find room by id: " + err)
    })
})

module.exports = router