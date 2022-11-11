// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = [
  {"url":`http://localhost:${process.env.REACT_APP_EXPRESS_PORT}`,"color":"blue"},
  {"url":`http://localhost:${process.env.REACT_APP_PHP_PORT}`,"color":"red"},
  {"url":`http://localhost:${process.env.REACT_APP_PHP2_PORT}`,"color":"white"},
  {"url":`http://localhost:${process.env.REACT_APP_PYTHON_PORT}`,"color":"yellow"},
]
export default requests;
