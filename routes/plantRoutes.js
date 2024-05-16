// plantRoutes.js

const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Ruta para obtener todas las plantas
router.get('/plants', plantController.getPlants);
// Ruta para obtener plantas por id
router.get('/plant/:id', plantController.getPlant);
// Ruta para guardar planta
router.post('/plant', plantController.savePlant);
// Ruta para eliminar planta
router.delete('/plant/:id', plantController.removePlant)
router.put('/plant/:id', plantController.updatePlant)



module.exports = router;