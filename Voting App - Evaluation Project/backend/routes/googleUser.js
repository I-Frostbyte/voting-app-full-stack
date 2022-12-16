const express = require('express')

// controller functions

const { createGoogleUser, updateGoogleUser, getGoogleUsers } = require('../controllers/googleUserController')

const router = express.Router()

router.get('/', getGoogleUsers)

// adding google user to the database
router.post('/', createGoogleUser)

// updating google user
router.patch('/:id', updateGoogleUser)

module.exports = router
