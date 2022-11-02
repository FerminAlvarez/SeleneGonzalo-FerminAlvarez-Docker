// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = [
  {"url":"http://localhost:3004","color":"blue"},
  {"url":"http://localhost:3005","color":"red"},
  {"url":"http://localhost:3006","color":"white"},
  {"url":"http://localhost:5000","color":"yellow"},
]
console.log(process.env.EXPRESS_PORT);
export default requests;
