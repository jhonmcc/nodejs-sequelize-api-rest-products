const express = require('express')

const routes = express.Router()

// ref controller
const productController = require('../controllers/productController')

routes.get('/', (req, res) => {
    return res.send({path: "product/"})
})

routes.get('/all', (req, res) => {
    productController.listAll(res)
})


module.exports = routes