const { Router } = require('express');

const routerProductos = Router();

let productos = [
  {
    "title": "Keycron XS",
    "price": 30,
    "thumbnail": "http://algo.com",
    "id": 1
  }
];

routerProductos.get('/productos', (req, res) => {
    res.json({
      productos
    });
  // try {
    //   res.json({
    //     status: 200,
  //     message: "Get data ok from index",
  //     productos
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).send('Server error');
  // }
});

routerProductos.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  if (productos.find(element => element.id === parseInt(id))){
    res.json(productos.find(element => element.id === parseInt(id)));
  } else {
    res.json({msj: `No existe el producto con ID: ${id}`});  
  }
});

routerProductos.put('/productos/:id', (req, res) => {
  const {title, price, thumbnail} = req.body;
  const { id } = req.params;
  if (productos.find(element => element.id === parseInt(id))) {
    productos[id - 1] = { 'id': parseInt(id), title, price, thumbnail};
    res.json(productos);
  } else {
    res.json({msj: `No existe el producto con ID: ${id}`});  
  }
});

routerProductos.post('/productos', (req, res) => {
  let idX = 0;
  productos.length ? idX = productos[productos.length - 1].id + 1 : idX = 1;
  productos.push({...req.body, id: idX});
  res.json(req.body);
});

routerProductos.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  const producto = productos.findIndex(p => p.id === parseInt(id));
  if(producto !== -1) {
    productos.splice(producto, 1);
    console.log(producto, productos);
    res.json({msj: `Se borró el producto con ID: ${id}`});
  } else {
    console.log(producto, productos);
    res.json({msj: `No se encontró el producto con ID: ${id}`});
  }
});

module.exports = routerProductos;