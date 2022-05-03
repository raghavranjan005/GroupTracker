const mongoose = require("mongoose")

const groupSchema = new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    members:[{type: mongoose.Schema.Types.ObjectId}],
})

const groupModel = mongoose.model("Group", groupSchema);

module.exports = groupModel;