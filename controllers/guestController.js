const guestModel = require("../modals/guest_modal")
const roomModel = require("../modals/room_modal")

exports.getGuests = (req, res) => {
    guestModel.find().sort({_id: 'desc'}).lean().then((r) => {
        res.render("guests", {guests: r})
    }).catch((err) => {
        console.log("guest find: " + err)
    })
}

exports.addGuest = (req, res) => {
    roomModel.find().lean().then((r) => {
        res.render("add_guest", {rooms: r})
    }).catch((err) => {
        console.log(err)
    })
}

exports.insertGuest = (req, res) => {
    guestModel.find({guest_room_id: req.body.guest_room_id}).count().then((r) => {
        if(r >= 1) {
            res.render("add_guest", {error: "Room already taken"})
        } else {
            const guest = new guestModel(req.body)

            guest.save().then((r) => {
                console.log("guest insert: " + r)
                res.redirect("/guests")
            }).catch((err) => {
                console.log("guest insert: " + err)
            })
        }
    }).catch((err) => {
        console.log("room count: " + err)
    })
}