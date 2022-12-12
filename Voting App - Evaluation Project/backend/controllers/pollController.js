const Poll = require('../models/pollModel')
const mongoose = require('mongoose')

var fs = require('fs')
var path = require('path')
require('dotenv/config')

// get all polls
const getPolls = async (req, res) => {
    const polls = await Poll.find({}).sort({createdAt: -1})

    res.status(200).json(polls)
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

    res.status(200).json(poll)

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

module.exports = {
    getPolls,
    getPoll,
    createPoll,
    updatePoll
}