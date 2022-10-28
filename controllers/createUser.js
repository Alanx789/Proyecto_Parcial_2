const FB = require('../firebase/index')
const db = {FB}

const createUser = async(req, res) => {
    try {

        //Desestructurar el dinero recibido
        const {body : {money} }= req

        //Creación de los datos del usuario
        const newUser = {
            money : money,
            collectibles : [] 
        }

        //Subida a la BD
        const users = db.collection('Cerditos')
        const { _path: {segments} } = await users.add(newUser)

        //Asignación de ID en base a su localidad en la BD
        const id = segments[1]

        //Respuesta enviada
        res.send({
            id: id,
            money : money,
            collectibles: []
        })
        
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createUser
}