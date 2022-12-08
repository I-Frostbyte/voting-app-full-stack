const express = require('express')
const {
    createCandidate,
    getCandidates,
    getCandidate,
    deleteCandidate,
    updateCandidate,
    createProfilepic,
    getProfilepic,
    getPolls,
    getPoll,
    createPoll,
    updatePoll
} = require('../controllers/candidateController')

// var profileModel = require('../models/candidateModel')
// const requireAuth = require('../middleware/requireAuth')

var multer = require('multer')

const router = express.Router()

// require auth for all candidate routes
/* router.use(requireAuth) */

// GET all candidates
router.get('/', getCandidates)

// GET a single candidate
router.get('/:id', getCandidate)

// CREATE a new candidate
router.post('/', createCandidate)

// DELETE a candidate
router.delete('/:id', deleteCandidate)

// UPDATE a candidate
router.patch('/:id', updateCandidate)

// GET a single profilepic
router.get('/pictures/:id', getProfilepic)

// CREATE a new profile pic
router.post('/pictures', createProfilepic)

// GET all polls
router.get('/polls', getPolls)

// GET a single poll
router.get('/polls/:id', getPoll)

// CREATE a new poll
router.post('/polls', createPoll)

// UPDATE a poll
router.patch('/polls/:id', updatePoll)

module.exports = router