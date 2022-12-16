const mongoose = require('mongoose')

const Schema = mongoose.Schema

const googleUserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    voted: {
        type: Boolean,
        default: false
    }
    
})


module.exports = mongoose.model('GoogleUser', googleUserSchema)
