const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title":{type:String,required:true},
        "desc":{type:String,required:true},
        "date":{type:String,required:true},
        "duration":{type:String,required:true},
        "venu":{type:String,required:true},
        "trainerName":{type:String,required:true}
    }
)

let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}
