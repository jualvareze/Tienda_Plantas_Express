// plantController.js

const { getAllPlants } = require('../model/plantModel');

// Controlador para obtener todas las plantas
async function  getPlants(req, res) {
  const plants = await getAllPlants();
  console.log(plants)
  res.json(plants);
}



module.exports = {
  getPlants
};