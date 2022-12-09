const Candidate = require('../models/pollModel')
const Profilepic = require('../models/profilepicModel')
// const Profilepic = require('../models/pollModel')
const Poll = require('../models/pollModel')
const mongoose = require('mongoose')
// const candidateModel = require('../models/candidateModel')

var fs = require('fs')
var path = require('path')
require('dotenv/config')

// get all candidates
const getCandidates = async (req, res) => {
        
    const candidates = await Candidate.find({}).sort({createdAt: -1})
    
    res.status(200).json(candidates)

    
}

// get all polls
const getPolls = async (req, res) => {
    const polls = await Poll.find({}).sort({createdAt: -1})

    res.status(200).json(polls)
}

// get a single candidate

const getCandidate = async (req, res) => {
    const { id } = req.params    

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such candidate"})
    }

    const candidate = await Candidate.findById(id)

    if(!candidate){
        return res.status(404).json({error: "No such candidate"})
    }
}

// get a single poll
const getPoll = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such poll"})
    }

    const poll = await Poll.findById(id)

    if(!poll){
        return res.status(404).json({error: "No such poll"})
    }

}

// get a single profilepic

const getProfilepic = async (req, res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such candidate"})
    }

    const profilepic = await Profilepic.findById(id)

    if(!profilepic){
        return res.status(404).json({error: "No profile picture for this candidate"})
    }
}

// create a new poll
const createPoll = async (req, res) => {
    const { title } = req.body

    // add poll to db
    try{
        const user_id = req.user_id
        const poll = await Poll.create({title, user_id})
        return res.status(200).json(poll)
    } catch(error) {
        return res.status(400).json({error: error.message})
    }
} 


// create a new candidate
const createCandidate = async (req, res) => {
    
    const { name, department, age, campaignPromise, candidateVotes } = req.body

    
    let emptyFields = []
    
    if(!name) {
        emptyFields.push('name')
    }
    if(!department) {
        emptyFields.push('department')
    }
    if(!age) {
        emptyFields.push('age')
    }    
    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill all the fields', emptyFields }) 
    }
    

    // add candidate to db
    try{
        const user_id = req.user_id
        const candidate = await Candidate.create({name, department, age, campaignPromise, candidateVotes, user_id})
        return res.status(200).json(candidate)
    } catch(error) {
        return res.status(400).json({error: error.message})
    }

    // res.json({msg: 'Add a new candidate'})
    
    
}

// create new profile picture
const createProfilepic = async (req, res) => {
    var obj = {
        profilepic: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/jpg',            
        }
    }

    Profilepic.create(obj, (err, item) => {
        if (err) {
            console.log(err)
        }
        else {
            item.save();
            // res.redirect('/')
        } 
    } )
}

// delete a candidate
const deleteCandidate = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such candidate"})
    }

    const candidate = await Candidate.findOneAndDelete({_id: id})

    if(!candidate){
        return res.status(404).json({error: "No such candidate"})
    }

    res.status(200).json(candidate)
}

// update a candidate
const updateCandidate = async (req, res) => {
        
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({errror: "No such candidate"})
    }

    const candidate = await Candidate.findOneAndUpdate({_id: id}, {
        ...req.body 
    })

    if(!candidate){
        return res.status(404).json({error: "No such candidate"})
    }

    res.status(200).json(candidate)
    
   /* Tried Net Ninja Old Method

   const updates = req.body

    if(ObjectId.isValid(req.params.id)){
        db.collection('candidates')
            .updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({error: 'Could not update the candidate'})
            })
    } else {
        res.status(500).json({error: "Not a valid candidate id"})
    }

   */
}

// update a poll
const updatePoll = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such poll exists"})
    }

    const poll = await Poll.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if(!poll){
        return res.status(404).json({error: "No such poll exists"})
    }

    res.status(200).json(poll)
}

module.exports ={
    getCandidates,
    getCandidate,    
    createCandidate,
    deleteCandidate,
    updateCandidate,
    getProfilepic,
    createProfilepic,
    getPolls,
    getPoll,
    createPoll,
    updatePoll
}