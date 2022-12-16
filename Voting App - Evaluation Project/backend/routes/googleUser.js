const express = require('express')

// controller functions

const { createGoogleUser, updateGoogleUser } = require('../controllers/googleUserController')

const router = express.Router()

// adding google user to the database
router.post('/', createGoogleUser)

// updating google user
router.patch('/:id', updateGoogleUser)

module.exports = router
