const {Schema,model} = require("mongoose");


const taskSchema = new Schema({
    
    title:{
        type:String,
        max:50
    },
    Fecha:{
        type: Date,
        default: new Date()
    },
    descripcion:{
        type: String
    }
});

module.exports = model("task", taskSchema)