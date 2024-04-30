// plantRoutes.js

const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Ruta para obtener todas las plantas
router.get('/plants', plantController.getPlants);



module.exports = router;