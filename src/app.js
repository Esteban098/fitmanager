import express  from "express";
import morgan from "morgan"; 

//Server
const app = express();

//Morgan muestra las peticiones que se hace a el servidor
app.use(morgan('dev'))

export default app;

