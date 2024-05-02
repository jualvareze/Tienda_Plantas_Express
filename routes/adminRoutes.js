const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//logearse
router.get('/login', adminController.login);



module.exports = router;