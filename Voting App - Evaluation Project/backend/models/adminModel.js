const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    adminId: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

// static signup method
adminSchema.statics.signup = async function(adminId, password){

    // validation
    if(!adminId || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isAlphanumeric(adminId)) {
        throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ adminId })

    if(exists) {
        throw Error('Admin Id already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const admin = await this.create({ adminId, password: hash })

    return admin
}

// static login method
adminSchema.statics.login = async function(adminId, password) {

    if (!adminId || !password) {
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({ adminId })
    if(!admin){
        throw Error('Incorrect adminId')
    }

    const match = await bcrypt.compare(password, admin.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return admin
}

module.exports = mongoose.model('Admin', adminSchema)