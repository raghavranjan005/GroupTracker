const mongoose = require("mongoose")

const groupSchema = new mongoose.Schema({
    users:[],
  });

const userSchema = new mongoose.Schema({
    name:{type: String,trim:true, required:true},
    email:{type:String, required:true, trim:true, unique:true, dropDups: true},
    password:{type:String, required:true},
    mobile:{type:String, required:true},
    lattitude:{type:String},
    longitude:{type:String},
    groups:[groupSchema],
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel; 