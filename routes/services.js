const express = require('express')
const router = express.Router()
const servicesController = require('../controllers/services') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, servicesController.getServices)

router.post('/createService', servicesController.createServices)

router.put('/editService', servicessController.editService)

router.delete('/deleteService', servicesController.deleteService)

module.exports = router