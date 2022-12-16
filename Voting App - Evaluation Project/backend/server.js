require('dotenv').config()

// if(process.env.NODE_ENV !== 'production') {
//     require('dotenv').config({path: __dirname+'/.env'})
// }

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const path = require('path')
var multer = require('multer')

// voting routes require
const candidateRoutes = require('./routes/candidates')
const pollRoutes = require('./routes/polls')
const pictureRoutes = require('./routes/pictures')
const adminRoutes = require('./routes/admin')
const googleUserRoutes = require('./routes/googleUser')

// user routes require

var fs = require('fs')
var path = require('path')
const cors = require('cors')
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
app.use('/api/polls', pollRoutes)
app.use('/api/pictures', pictureRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/googleUsers/', googleUserRoutes)


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

// if (process.emitWarning.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend', 'build')))
//     app.get('/*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
//     })
// }    

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
    