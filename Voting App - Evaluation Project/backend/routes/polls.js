const express = require('express')

const {
    getPolls,
    getPoll,
    createPoll,
    updatePoll
} = require('../controllers/pollController')

var multer = require('multer')

const router = express.Router()

// GET all polls 
router.get('/', getPolls)

// GET a single poll
router.get('/:id', getPoll)

// CREATE a new poll
router.post('/', createPoll)

// UPDATE a poll
router.patch('/:id', updatePoll)

module.exports = router