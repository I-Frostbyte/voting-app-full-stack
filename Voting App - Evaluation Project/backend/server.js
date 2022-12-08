require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var multer = require('multer')
// voting routes require
const candidateRoutes = require('./routes/candidates') 
// user routes require

var fs = require('fs')
var path = require('path')
// require('dotenv/config')

// express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/candidates', candidateRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err);
    })


app.use(bodyParser.urlencoded({ extended: false }))    
app.use(bodyParser.json())

// Set EJS as templating engine
app.set("view engine", "ejs");


// Set up multer for storing uploaded files



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file, fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });
    