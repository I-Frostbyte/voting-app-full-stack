const express = require('express')

// controller functions

const { loginAdmin, signupAdmin, getAdmins } = require('../controllers/adminController')

const router = express.Router()

// get admins
router.get('/', getAdmins)

// login route
router.post('/login', loginAdmin)

// signup route
router.post('/signup', signupAdmin)

module.exports = router
