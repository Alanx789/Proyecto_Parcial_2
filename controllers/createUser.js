const FB = require('../firebase/index')
const db = {FB}

const createUser = async(req, res) => {
    try {
        console.log(req)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createUser
}