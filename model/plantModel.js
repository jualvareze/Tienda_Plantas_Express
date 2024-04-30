const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

// Configura la conexión a la base de datos 
const client = new Client({
  user: 'root',
  host: 'dpg-coks4a0l5elc73dfpf7g-a.oregon-postgres.render.com',
  database: 'tienda_plantas',
  password: 'x48FiKH1Gg2gdtt07jHdY4GQZEyGyCWK',
  port: 5432,
  allowExitOnIdle: true,
  ssl: {
    rejectUnauthorized: false, // desactiva la verificación del certificado SSL
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