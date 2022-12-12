const express = require('express')
const {
    createProfilepic,
    getProfilepic
} = require('../controllers/pictureController')

var multer = require('multer')

const router = express.Router()

// GET a single profilepic
router.get('/:id', getProfilepic)

// CREATE a new profile pic
router.post('/', createProfilepic)

module.exports = router