
const { verificarCredenciales } = require('../model/adminModel');
const jwt = require("jsonwebtoken")
require("dotenv").config();


async function login(req, res) {
    try {
        const { email, password } = req.body
        await verificarCredenciales(email, password)
        const token = jwt.sign({ email }, process.env.JSBT_SKEY)
        res.send(token)
        } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
        }
}

module.exports = {
  login
};