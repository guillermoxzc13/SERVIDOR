//exportacion de libreria
const express = require("express")
const path = require("path")
const morgan = require("morgan")
const cors = require("cors")

require("dotenv").config()

// se inicializa la libreria
const app = express();

// Conexión a la base de datos
const conectandobd = require("./src/conexiones")

conectandobd()

// Middlewares
app.use(express.json())

app.use(cors())

app.use(morgan())


// Recursos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

// Rutas

app.use(require('./src/routes/use.routes'))

app.use(require('./src/routes/taskroutes'))


// Iniciar servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})