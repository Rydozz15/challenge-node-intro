const fs = require("fs");

const registrar = (
  nombreInput,
  edadInput,
  tipoInput,
  colorInput,
  enfermedadInput
) => {
  let cita = [
    { nombre: nombreInput },
    { edad: edadInput },
    { tipo: tipoInput },
    { color: colorInput },
    { enfermedad: enfermedadInput },
  ];
  fs.writeFileSync("citas.json", JSON.stringify(cita));
};

const leer = () => {
  const citas = fs.readFileSync("citas.json", "utf8");
  JSON.parse(citas).forEach((cita) => {
    console.log(cita);
  });
};

module.exports = { registrar, leer };
