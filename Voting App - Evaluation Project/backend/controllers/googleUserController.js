const GoogleUser = require('../models/googleUserModel')  

const mongoose = require('mongoose')

var fs = require('fs')
var path = require('path')
require('dotenv/config')

const getGoogleUsers = async (req, res) => {
    const googleUsers = await GoogleUser.find({}).sort({createdAt: -1})

    res.status(200).json(googleUsers)
}

const createGoogleUser = async (req, res) => {

    const { userName, email, imageUrl, voted } = req.body

    const exists = await GoogleUser.findOne({ email })

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })

    if(exists) {
        return res.status(200).json(exists)
    } else {
        try{
            const user_id = req.user_id    
            const googleUser = await GoogleUser.create({userName, email, imageUrl, voted, user_id})
            return res.status(200).json(googleUser)
        } catch(error) {
            return res.status(400).json({error: error.message})
        }
    }
    
}

const updateGoogleUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({errror: "No such user"})
    }

    const googleUser = await GoogleUser.findOneAndUpdate({_id: id}, {
        voted: true        
    })

    if(!googleUser){
        return res.status(404).json({error: "No such user"})
    }

    res.status(200).json(googleUser)
}

module.exports = { createGoogleUser, updateGoogleUser, getGoogleUsers }