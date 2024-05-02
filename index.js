const express = require('express');
const bodyParser = require('body-parser');
const plantRoutes = require('./routes/plantRoutes');
const adminRoutes = require('./routes/adminRoutes')
const cors = require('cors');

const app = express();

// Middleware para analizar cuerpos de solicitud JSON
app.use(bodyParser.json());

// usar Cors
app.use(cors())

// Usar las rutas de las plantas
app.use('/api', plantRoutes);

app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});