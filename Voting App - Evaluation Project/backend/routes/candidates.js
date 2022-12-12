const express = require('express')
const {
    createCandidate,
    getCandidates,
    getCandidate,
    deleteCandidate,
    updateCandidate   
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

module.exports = router