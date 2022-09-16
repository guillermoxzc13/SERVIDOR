
const taskmodel = require("../models/task")
const ctrltask = {}


ctrltask.getTasks =async (req, res)=>{
    const taskk = await taskmodel.find()
    res.send({
        message:"tarea encontrada",
        taskk
    })
}

ctrltask.postTasks = async (req, res)=>{
    const {title, date, descripcion} = req.body
    const newTask = new taskmodel({
        title,date,descripcion
    })
    const tarearegistrada = await newTask.save()
    res.send({
        message: "Peticion POST",tarearegistrada
    })
}

ctrltask.putTasks = (req, res)=>{
    res.send({
        message: "Peticion PUT"
    })
}

ctrltask.deleteTasks = (req, res)=>{
    res.send({
        message: "Peticion DELETE"
    })
}

module.exports = ctrltask