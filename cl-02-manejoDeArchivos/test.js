const Contenedor = require('./main');

const productosDB = new Contenedor("productos.txt");

// PRUEBAS: comentar o descomentar las lineas que correspondan para probar el metodo
// yarn serve se ejecuta el script con nodemon
// yarn start se ejecuta el script con node

const test = async () => {

  // save(Object) recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  console.log("Guarda Producto", productosDB.save({title: "Hot Wheels 2", price: 30, thumbnail: "http://algo.com"}));
  
  // getById(Number) recibe un id y devuelve el objeto con ese id, o null si no esta.
  // console.log(await productosDB.getById(80));
  // console.log(await productosDB.getById(2));
  
  // getAll() devuelve un array con los objetos presentes en el archivo.
  // console.log(await productosDB.getAll());
  
  // deleteById(Number) elimina del archivo el objeto con el id buscado.
  // console.log(await productosDB.deleteById(2));
  
  // deleteAll(Number) elimina todos los objetos presentes en el archivo.
  // console.log(await productosDB.deleteAll());
}

test();