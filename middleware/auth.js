const jwt = require("jsonwebtoken")
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.cookies.access_token

    if(!token) {
        return res.status(403).send('Token required for authorization')
    }

    jwt.verify(token, process.env.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send("Invalid Token")
        } else {
            req.user_id = decoded.user_id
            req.user_name = decoded.user_name
            return next()
        }
    })
    
}

module.exports = verifyToken