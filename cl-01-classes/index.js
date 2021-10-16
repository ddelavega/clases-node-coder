class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    console.log("this", this);
  }
  getFullName() {
    return `${usuario.nombre} ${usuario.apellido}`;
  }
  addMascota(nombre) {
    this.mascotas.push(nombre);
    return this.mascotas;
  }
  countMascotas() {
    return this.mascotas.length ? this.mascotas.length : "No tiene mascotas.";
  }
  getBookNames() {
    return this.libros.map((libro) => (libro = libro.nombre));
  }
}

const usuario = new Usuario(
  "Diego",
  "de la Vega",
  [
    { nombre: "Drácula", autor: "Brham Stocker" },
    { nombre: "Replicant number 8", autor: "Phillip Dick" },
  ],
  ["Gaia", "Rocco"]
);

console.log("usuario", usuario);
console.log("getFullName", usuario.getFullName());
console.log("addMascotas", usuario.addMascota("Ruthless"));
console.log("countMascotas", usuario.countMascotas());
console.log("getBookNames", usuario.getBookNames());
