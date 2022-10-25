//Libraries
const express = require('express')

//Functions
const {createUser} = require('../controllers/createUser')
const {addMoney} = require('../controllers/addMoney')
const {setOrder} = require('../controllers/setOrder')

//Create variable
const router = express.Router()

router.post('/account', createUser)
router.put('/account/:id', addMoney)
router.post('/account/:id/order', setOrder)

module.exports = {
    router
}