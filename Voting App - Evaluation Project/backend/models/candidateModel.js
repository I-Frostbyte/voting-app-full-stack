
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
    },
    position: {
        type: String
    }
    
},{timestamps: true})

module.exports = mongoose.model('Candidate', candidateSchema)

