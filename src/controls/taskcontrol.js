

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
    const {title,descripcion}= req.body
    try {
        await taskmodel.updateOne({_id: id}, {
            $set:{
                title,
                descripcion
            }
        })

        res.json("Actualizado");
    } catch (err) {
        res.json(err)
    }
}

ctrltask.deleteTasks = async(req, res)=>{
    const id = req.params.id
    try{
        await taskmodel.findByIdAndDelete(id)

        res.json("eliminado")
    }

    catch(err){
        console.log(err)
    }
}

module.exports = ctrltask