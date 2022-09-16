const Usermodel = require("../models/User")
const ctrlUser = {}

ctrlUser.getHome = (req, res)=>{
    res.send({
        message: "Peticion GET"
    })
}

ctrlUser.getUser = async(req, res)=>{
    const Users = await Usermodel.find()
    res.send({
        message:"Usuarios encontrados",
        Users
    })
}

ctrlUser.postHome = async (req, res)=>{
    const {name, email, password} = req.body
    const newuser = new Usermodel({
        name,email,password
    })
    const useregisted = await newuser.save()
    res.send({
        message: "Peticion POST",useregisted
    })
}

ctrlUser.putHome = (req, res)=>{
    res.send({
        message: "Peticion PUT"
    })
}

ctrlUser.deleteHome = (req, res)=>{
    res.send({
        message: "Peticion DELETE"
    })
}

module.exports = ctrlUser;