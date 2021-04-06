const express = require('express')

const routes = express.Router()

// ref controller
const productController = require('../controllers/productController')

routes.get('/', (req, res) => {
    productController.init(res)
    productController.listAll(res)
    // return res.send({path: "product/"})
    })
    .post('/add', (req, res) => {
        productController.insert(req, res)
    })
    .get('/:id', (req, res) => {
        // res.send({ params: req.params })
        productController.findOne(req, res)
    })
    
module.exports = routes