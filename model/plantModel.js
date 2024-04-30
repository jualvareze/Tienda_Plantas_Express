require('dotenv').config();
const path = require('path');
const { Client } = require('pg');

// Configura la conexión a la base de datos 
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
  ssl: {
    rejectUnauthorized: false, // Desactiva la verificación del certificado SSL
  },
});

// Conecta a la base de datos
client.connect();


const getAllPlants = async ()=>{
  try {
    // Ejecuta la consulta SQL para obtener todas las plantas
    const result = await client.query('SELECT * FROM Producto');
    return result.rows; // Devuelve las filas obtenidas de la consulta
  } catch (error) {
    console.error('Error al obtener las plantas:', error);
    throw error; // Re-lanza el error para que el controlador lo maneje
  }
}


const setPlants = async (id, nombre, tipo, desc, precio) => {
  try {
    const result =await client.query('')
  } catch (error) {
    console.error('Error al guardar planta', error)
  }
}


module.exports = {
  getAllPlants
};