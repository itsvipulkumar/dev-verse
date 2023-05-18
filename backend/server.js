const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const db = require("./db")
const PORT = process.env.PORT || 80;
const router = require('./routers')

// db connections



db.connect();

// middle ware part


app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use(express.json())


///header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next()
})

//API

app.use('/api', router)

//static resources


app.use('/upload', express.static(path.join(__dirname, '/../uploads')))
app.use(express.static(path.join(__dirname, "/../frontend/build")))

app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    }
    catch (e) {
        res.send(`OOPS! Error Occurred`)
    }
})


app.use(cors())


//server listen

app.listen(PORT, () => {
    console.log(`Running  on port",${PORT}`)
})
