(async () => {
    const database = require('./database/db')
    const produto = require('./models/productModel')
    
    try {
        const result = await database.sync()
        console.log(result)

        // const createResult = await produto.create({
        //     nome: 'mouse', 
        //     preco: 10,
        //     descricao: 'um mouse USB bonitao'
        // })
        // console.log(createResult)

        const resultAll = await produto.findAll()
        console.log(resultAll)
        
        // const findOne = await produto.findByPk(1)
        // console.log(findOne)

        // const updateOne = await produto.findByPk(1)
        // console.log(updateOne)
        // updateOne.nome = 'Mouse Laser'
        // const resUpdate = await updateOne.save()
        // console.log(resUpdate)

        // delete by two ways
        // produto.destroy({where: {id: 1}}) // first

        // const delOne = await produto.findByPk(2) //second
        // delOne.destroy() //second

    } catch (error) {
        console.log(error)
}
})()

