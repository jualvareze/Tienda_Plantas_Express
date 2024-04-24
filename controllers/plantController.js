// plantController.js

const { getAllPlants, savePlants } = require('../model/plantModel');

// Controlador para obtener todas las plantas
function getPlants(req, res) {
  const plants = getAllPlants();
  res.json(plants);
}

// Controlador para agregar una nueva planta
function addPlant(req, res) {
  const { name, price, description } = req.body;
  const plants = getAllPlants();
  const id = Date.now().toString(); // Simplemente para este ejemplo
  const newPlant = { id, name, price, description };
  plants.push(newPlant);
  savePlants(plants);
  res.status(201).json(newPlant);
}

module.exports = {
  getPlants,
  addPlant
};