const mongoose = require('mongoose')

const Schema = mongoose.Schema

const candidateSchema = new Schema({
    name: {
        type: String
        // required: true
    },
    department: {
        type: String
        // required: true
    },
    age: {
        type: String
        // required: true 
    },
    campaignPromise: {
        type: String        
    },
    candidateVotes: {
        type: Number
    }
    
},{timestamps: true})

const pollSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    candidate: [candidateSchema]
})

module.exports = mongoose.model('Poll', pollSchema)
module.exports = mongoose.model('Candidate', candidateSchema)