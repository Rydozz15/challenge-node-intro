const { registrar, leer } = require("./operaciones");
const operacion = process.argv.slice(2);
const programa = (operacion) => {
  if (operacion[0] === "registrar") {
    registrar(
      operacion[1],
      operacion[2],
      operacion[3],
      operacion[4],
      operacion[5]
    );
  }
  if (operacion[0] === "leer") {
    try {
      leer();
    } catch (e) {
      console.log("No se encuentra el archivo, ocupa registrar primero");
    }
  }
};
programa(operacion);
