

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
    const {title,descripcion} = req.body
    const newTask = new taskmodel({
        title,
        descripcion
    }) 
    const tarearegistrada = await newTask.save()
    res.send({
        message: "Peticion POST",tarearegistrada
    })
    
}

ctrltask.putTasks = async(req, res)=>{
    const id = req.params.id 
    try {
        await taskmodel.findByIdAndUpdate(id, function (err, docs){
            if (err){
                res.json("no se pudo actualiza")
            }
            else{
                res.json("se actualizo con exito", docs)
            }
        })
    } catch (err) {
        res.josn(err)
    }
}

ctrltask.deleteTasks = async(req, res)=>{
    const id = req.params.id
    try{await taskmodel.findByIdAndDelete(id, function (err, docs) {
        if (err){
            res.json("no se pudo eliminar")
        }
        else{
            console.log("se elimino con exito", docs);
        }
    });}

    catch(err){
        console.log(err)
    }
}

module.exports = ctrltask