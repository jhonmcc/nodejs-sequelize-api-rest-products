const express = require('express')
const cors = require('cors')
const requireDir = require('require-dir')

const PORT = process.env.PORT || 3000

// pre-configs express
const app = express()
app.use(express.json())
app.use(cors())

// connect db

// register models
requireDir('./src/models')

// user router api
app.use('/banco', require('./routers/'))