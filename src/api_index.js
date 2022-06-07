

import request from "express";
import express from "express";
import morgan from "morgan";
import ApiRoutes from "./routes/rutas.js";
const app = express();


//Configuraciones
app.set("port", 3000)
app.set("json spaces", 2)

//Middlewares
app.use(morgan("dev"))
app.use(express.json())

//rutas
app.use("/smiteapp.api", ApiRoutes);

//Empezando el proyecto
app.listen(app.get("port"))





