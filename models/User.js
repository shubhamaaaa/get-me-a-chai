import mongoose from "mongoose";
const {Schema,model}=mongoose;
const UserSchema=new Schema({
    email:{type:String,required:true},
    name:{type:String},
    username:{type:String,required:true},
    profilepic:{type:String},
    coverpic:{type:String},
    createdAT:{type:Date,default:Date.now},
    updatedAT:{type:Date,default:Date.now},
});

export default  mongoose.models.User||model("User",UserSchema);