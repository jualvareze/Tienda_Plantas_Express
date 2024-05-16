require("dotenv").config();
const path = require("path");
const { Client } = require("pg");

// Configura la conexión a la base de datos
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

//obtener todas las plantas
const getAllPlants = async () => {
  try {
    const result = await client.query("SELECT * FROM Producto");
    return result.rows;
  } catch (error) {
    console.error("Error al obtener las plantas:", error);
  }
};

//guardar planta
const setPlant = async (nombre, tipo, descripcion, precio) => {
  try {
    const consulta =
      "INSERT INTO Producto (nombre, tipo, descripcion, precio) VALUES ($1, $2, $3, $4)";
    const values = [nombre, tipo, descripcion, precio];
    const result = await client.query(consulta, values);
    return result;
  } catch (error) {
    console.error("Error al guardar planta:", error);
  }
};

//eliminar planta
const delPlant = async (id) => {
  try {
    const consulta = "DELETE FROM Producto WHERE id = $1";
    const values = [id];
    const result = await client.query(consulta, values)
    return result
  } catch (error) {
    console.error('error al eliminar planta', error)
  }
};

//editar planta
const editPlant = async (nombre,tipo,descripcion,precio,id) =>{
  try {
    const consulta = "UPDATE Producto SET nombre = $1, tipo = $2, descripcion = $3, precio = $4  WHERE id = $5"
    const values = [nombre,tipo,descripcion,precio,id]
    const result = await client.query(consulta, values)
    return result
  } catch (error) {
    console.error('error al actualizar Planta', error)
  }
}

//obtener plantas por id
const getPlantForId = async (id) => {
  try {
    const consulta = "SELECT * FROM producto WHERE id = $1";
    const values = [id];
    const { rows } = await client.query(consulta, values);
    return rows;
  } catch (error) {
    console.error("Error al obtener planta", error);
  }
};

module.exports = {
  getAllPlants,
  getPlantForId,
  setPlant,
  delPlant,
  editPlant
};
