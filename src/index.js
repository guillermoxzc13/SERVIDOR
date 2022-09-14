const express = require("express")
const path = require("path")
const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, 'src/public')));

app.use(require('./routes/use.routes'))

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})