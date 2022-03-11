
const { request } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuraciones
app.set("port", 3000)
app.set("json spaces", 2)

//Middlewares
app.use(morgan("dev"))
app.use(express.json())

//rutas
app.use("/api.tecedu.com", require("./routes/rutas"));

//Empezando el proyecto
app.listen(app.get("port"))





