const Candidate = require('../models/candidateModel')

// const Profilepic = require('../models/pollModel')

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

    res.status(200).json(candidate)
}

// create a new candidate
const createCandidate = async (req, res) => {
    
    const { name, department, age, campaignPromise, candidateVotes, position } = req.body

    
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
        const candidate = await Candidate.create({name, department, age, campaignPromise, candidateVotes, position, user_id})
        return res.status(200).json(candidate)
    } catch(error) {
        return res.status(400).json({error: error.message})
    }

    // res.json({msg: 'Add a new candidate'})
    
    
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
        $inc: {candidateVotes: 1}  
    }, {
        new: true
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

module.exports ={
    getCandidates,
    getCandidate,    
    createCandidate,
    deleteCandidate,
    updateCandidate       
}