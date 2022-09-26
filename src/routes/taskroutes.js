const routertask = require("express").Router();


const {
     
    getTasks,
    postTasks, 
    putTasks, 
    deleteTasks} = require("../controls/taskcontrol")



routertask.get("/task", getTasks)

routertask.post("/task", postTasks)

routertask.put("/task/:id", putTasks)

routertask.delete("/task/:id", deleteTasks)

module.exports = routertask;