const mongoose = require("mongoose");

const updates= mongoose.Schema({
    description: {
      type: String ,
      required: true 
    },
    email:{
      type:String,
      Required:true
    },
    friendemail:{
      type:String,
      Required: false
    }
})

module.exports = mongoose.model("Updates", updates);
