const roomModal = require("../modals/room_modal")

exports.getRooms = (req, res) => {
    roomModal.find().sort({_id: 'desc'}).lean().then((r)=>{
        res.render("rooms", {rooms: r})
    }).catch((err) => {
        console.log("room find: " + err)
    })
}

exports.addRoom = (req, res) => {
    res.render("add_room")
}

exports.insertRoom = (req, res) => {
    const room = new roomModal(req.body)

    room.save().then((r) => {
        console.log("room insert: " + r)
        res.render("rooms", {message: "Room Added Successfully"})
    }).catch((err) => {
        console.log("room insert: " + err)
    })
}

exports.editRoom = (req, res) => {
    roomModal.findById(req.params.id).lean().then((r) => {
        res.render("edit_room", {room: r,  helpers: {
            eq_sb() { return r.room_type == 'single_bed'; },
            eq_db() { return r.room_type == 'double_bed'; }
        }
    })
    }).catch((err) => {
        console.log("find room by id: " + err)
    })
}