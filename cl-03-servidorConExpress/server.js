const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3111;

app.get('/', (req, res) => {
  res.send('Ahora, en vivo server con NodeJS!');
});

app.listen(port, () => {
  console.log(`Escuchando al puerto: ${port} en http://localhost:${port}`);
});
