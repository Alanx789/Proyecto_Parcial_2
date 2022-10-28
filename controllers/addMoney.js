const FB = require('../firebase/index')
const db = {FB}

const addMoney = async(req, res) => {
    try {
        const {body: {newMoney}} = req
        const {params: {id}} = req

        const users = db.collection('Cerditos').doc(id)
        const {_fieldsProto: {money, collectibles} }= await users.get()

        const newBalance = newMoney + money
        const updatedInfo = {
            money: newBalance,
            collectibles: collectibles
        }

        const update = await users.update(updatedInfo)

        res.send({
            "Current balance" : updatedInfo,
            "business errors": []
        })




    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    addMoney
}