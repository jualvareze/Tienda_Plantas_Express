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
    rejectUnauthorized: false, // Desactiva la verificación del certificado SSL
  },
});

// Conecta a la base de datos
client.connect();

const verificarCredenciales = async (email, password) => {
    const consulta = "SELECT * FROM usuario WHERE correo = $1 AND contrasena = $2"
    const values = [email, password]
    const { rowCount } = await client.query(consulta, values)
    console.log(rowCount)
    if (!rowCount) throw { code: 404, message: "No se encontró ningún usuario con estas credenciales" }
   }

module.exports = {
  verificarCredenciales,
};
