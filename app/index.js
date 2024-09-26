import express  from "express";

// Fix para __dirname
import path, { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url))


//Server
const app = express();
app.set("port", 4000)
app.listen(app.get("port"))
console.log("Server ON: ", app.get("port"))

// Config, para que se pueda acceder a la carpeta public como archivos estaticos

app.use(express.static(__dirname + "/public"));

//Roots

app.get("/", (req, res)=> res.sendFile(__dirname + "/pages/login.html"))