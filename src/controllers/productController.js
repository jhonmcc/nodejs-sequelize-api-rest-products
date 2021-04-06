const productModel = require('../models/productModel')
const db = require('../database/db')

module.exports = {
    async init(res){
        try {
            const conn = await db.sync()
            // res.status(200).json({server: 'Is Sync'})
        } catch (error) {
            res.status(400).json(error)
        }
    },

    async insert(req, res){
        try {
            const conn = await db.sync()
            // falta inserir persistencia de dados //
            const resInsert = await productModel.create({
                nome: req.body.nome,
                preco: req.body.preco,
                descricao: req.body.descricao
            })
            res.status(200).json(resInsert)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    async listAll(res){
        try {
            // const conn = await db.sync()
            const resAll = await productModel.findAll()
            res.status(200).json({products: resAll})
        } catch (error) {
            res.status(400).json(error)
        }
    },

    async findOne(req, res){
        try {
            const conn = await db.sync()
            const resOne = await productModel.findByPk(req.params.id)
            // console.log(req.params)
            return res.status(200).json(resOne)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}
