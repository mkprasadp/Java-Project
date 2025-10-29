import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:Number},
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;