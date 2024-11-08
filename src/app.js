import express  from "express";
import morgan from "morgan"; 
import authRoutes from "./routes/auth.routers.js";

//Server
const app = express();

//Morgan muestra las peticiones que se hace a el servidor
app.use(morgan('dev'))
app.use(authRoutes)
export default app;

