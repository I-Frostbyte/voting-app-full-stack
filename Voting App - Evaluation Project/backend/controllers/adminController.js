const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

const getAdmins = async(req, res) => {

    const admins = await Admin.find({}).sort({createdAt: -1})
    
    res.status(200).json(admins)
}

// login an admin
const loginAdmin = async (req, res) => {
    const { adminId, password } = req.body

    try {
        const admin = await Admin.login(adminId, password)

        // create a token
        
        const token = createToken(admin._id)

        res.status(200).json({adminId, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

// signup an admin
const signupAdmin = async (req, res) => {    
    const { adminId, password } = req.body 

    try {
        const admin = await Admin.signup(adminId, password)
                
        // create token
        const token = createToken(admin._id)

        res.status(200).json({adminId, token})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginAdmin, signupAdmin, getAdmins }