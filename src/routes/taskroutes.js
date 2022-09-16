const routertask = require("express").Router();


const {
     
    getTasks,
    postTasks, 
    putTasks, 
    deleteTasks} = require("../controls/taskcontrol")



routertask.get("/task", getTasks)

routertask.post("/task", postTasks)

routertask.put("/task", putTasks)

routertask.delete("/task", deleteTasks)

module.exports = routertask;