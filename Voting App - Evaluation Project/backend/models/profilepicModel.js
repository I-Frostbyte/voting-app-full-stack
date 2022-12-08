const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profilepicSchema = new Schema({
    profilepic: {
        data: Buffer,
        contentType: String,        
    }
})

module.exports = mongoose.model('Profilepic', profilepicSchema)