const {Schema,model} = require("mongoose");


const UserSchema = new Schema({
    name:{
        type:String,
        max:50
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        default: true
    }


},{
    timestamps:true
}
);

module.exports = model("User", UserSchema)