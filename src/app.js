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
requireDir('./models')

app.get('/', (req, res) => {
    res.send({server: 'online'})
})
// user router api
app.use('/product', require('./routers/productRoutes'))

app.listen(PORT, () => console.log('running server'))