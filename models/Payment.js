import mongoose from "mongoose";

const {Schema,model}=mongoose;

const PaymentSchema=new Schema({
    name:{type:String,required:true},
    to_user:{type:String,required:true},
    oid:{type:String,required:true},
    message:{type:String},
    amount:{type:String,required:true},
    createdAT:{type:Date,default:Date.now},
    updatedAT:{type:Date,default:Date.now},
    done:{type:Boolean,default:false},
});


export default  mongoose.models.Payment||model("Payment", PaymentSchema);