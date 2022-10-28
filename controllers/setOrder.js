const FB = require('../firebase/index')
const db = {FB}

const setOrder = async(req, res) => {
    try {
        const {body: {collection_name, amount, collection_price}} = req
        const {params: {id}} = req

        const users = db.collection('Cerditos').doc(id)
        const {_fieldsProto: {money, collectibles} }= await users.get()

        const new 



    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    setOrder
}