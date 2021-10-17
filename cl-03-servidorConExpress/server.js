const express = require('express');
require('dotenv').config();
const Contenedor = require('./main');
const productosDB = new Contenedor("productos.txt");


const app = express();
const port = process.env.PORT || 3111;

app.get('/', (req, res) => {
  res.send('Ahora, en vivo server con NodeJS!');
});
app.get('/productos', async (req, res) => {    
  res.status(200).send(JSON.stringify(await productosDB.getAll()));
});

app.get('/productoRandom', async (req, res) => {
  res.status(200).send(JSON.stringify(await productosDB.getRandom()));
});

app.listen(port, () => {
  console.log(`Escuchando al puerto: ${port} en http://localhost:${port}`);
});
