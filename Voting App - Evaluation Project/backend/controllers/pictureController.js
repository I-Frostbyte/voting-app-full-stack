const Profilepic = require('../models/profilepicModel')
const mongoose = require('mongoose')

var fs = require('fs')
var path = require('path')
require('dotenv/config')

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

module.exports = {
    getProfilepic,
    createProfilepic
}