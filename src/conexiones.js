const mongoose = require("mongoose");

const connectDB = async()=>{

    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("conectado a la db")
    } catch (error) {
        console.log("no se puedo conectar a la bd")
    }

}

module.exports = connectDB