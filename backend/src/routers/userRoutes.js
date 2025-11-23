const express = require('express')
const { register, login } = require('../controllers/userController')
const { validate } = require('../models/User')
const { registerSchema, loginSchema } = require('../validatioins/userValidation')

const router = express.Router()

router.post('/register',validate(registerSchema), register)
router.post('/login',validate(loginSchema), login)

module.exports = router