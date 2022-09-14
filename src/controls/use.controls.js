const ctrlUser = {}

ctrlUser.getHome = (req, res)=>{
    res.send({
        message: "Peticion GET"
    })
}

ctrlUser.getUser = ((req, res)=>{
    res.send({
        nombre: "guillermo",
        apellido:"lee"
    })
})

ctrlUser.postHome = (req, res)=>{
    res.send({
        message: "Peticion POST"
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