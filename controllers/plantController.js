// plantController.js

const {
  getAllPlants,
  getPlantForId,
  setPlant,
  delPlant,
  editPlant,
} = require("../model/plantModel");

// Controlador para obtener todas las plantas
async function getPlants(req, res) {
  const plants = await getAllPlants();
  res.json(plants);
}

// controlador para obtener plantas por id
async function getPlant(req, res) {
  const id = req.params.id;
  const plant = await getPlantForId(id);
  res.json(plant);
}

//controlador para guardar planta
async function savePlant(req, res) {
  const { nombre, tipo, descripcion, precio } = req.body;
  const result = await setPlant(nombre, tipo, descripcion, precio);
  res.status(201).json(result.rows[0]);
}

//controlador para remover planta
async function removePlant(req, res) {
  const id = req.params.id;
  const result = await delPlant(id);
  if (result.rowCount === 0) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.status(200).json({ message: "Producto eliminado correctamente" });
}

//controlador para actualizar planta
async function updatePlant(req, res) {
  const id = req.params.id;
  const { nombre, tipo, descripcion, precio } = req.body;
  const result = await editPlant(nombre, tipo, descripcion, precio, id);
  if (result.rowCount === 0) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.status(200).json({ message: "Producto actualizado correctamente" });
}

module.exports = {
  getPlants,
  getPlant,
  savePlant,
  removePlant,
  updatePlant
};
