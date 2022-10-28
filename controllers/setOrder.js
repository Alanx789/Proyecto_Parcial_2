const FB = require('../firebase/index')
const db = {FB}

const setOrder = async(req, res) => {
    try {
        //Conseguir el objeto solicitado
        const {body: {collection_name, amount, collection_price}} = req

        //Conseguir ID
        const {params: {id}} = req

        //Obtener datos del usuario
        const users = db.collection('Cerditos').doc(id)
        const {_fieldsProto: {money, collectibles} }= await users.get()

        //Dinero restante 
        const price = money - (amount * collection_price);
        
        //Variables en función del precio 
        const businessE = (price < 0) ? [] : ["INSUFICIENT_BALANCE"]
        const newCollectibles = (price < 0) ? [...collectibles] : [...collectibles, {
            "collection_name": collection_name,
            "amount": amount,
            "collection_price": collection_price
        }]
        const currentBalance = (price < 0) ? money : price

        //Actualizar info 
        const update = await users.update({
            id: id,
            money : currentBalance,
            collectibles: newCollectibles
        })

        //Respuesta a Postman
        res.send({
            "current balance": {
                "money" : currentBalance,
                "collectibles": newCollectibles
            },
            "business errors" : businessE

        })



    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    setOrder
}