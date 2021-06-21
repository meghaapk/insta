const mongoose = require ("mongoose")
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res-console.cloudinary.com/map687400/thumbnails/v1/image/upload/v1623956825/ZHBfbXE3c3d3/preview"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})
mongoose.model("User",userSchema)