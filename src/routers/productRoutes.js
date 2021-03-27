const express = require('express')

const routes = express.Router()

// ref controller
const productController = require('../controllers/productController')

routes.get('/', (req, res) => {
    productController.init(res)
    // return res.send({path: "product/"})
})

routes.get('/all', (req, res) => {
    productController.listAll(res)
})

routes.post('/add', (req, res) => {
    productController.insert(req, res)
})


module.exports = routes