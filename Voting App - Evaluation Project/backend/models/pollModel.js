const mongoose = require('mongoose')
// const candidateSchema = require('./candidateModel')

const Schema = mongoose.Schema

const pollSchema = new Schema({
    title: {
        type: String,
        required: true
    }
    // candidate: [candidateSchema]
})

module.exports = mongoose.model('Poll', pollSchema)
// module.exports = mongoose.model('Candidate', candidateSchema)