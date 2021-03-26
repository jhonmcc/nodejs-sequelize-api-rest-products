const productModel = require('../models/productModel')
const db = require('../database/db')

module.exports = {
    async init(req, res){
        try {
            const conn = await db.sync()
            console.log(conn)
            conn.close()
        } catch (error) {
            res.send(error)
        }
    },

    async listAll(res){
        try {
            const conn = await db.sync()
            const resAll = await productModel.findAll()
            res.status(200).json(resAll)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}
