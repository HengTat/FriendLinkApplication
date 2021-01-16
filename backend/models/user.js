const mongoose= require('mongoose');

const Usermodel=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    friendemail:{
        type: String,
        required:true
    },
    subscription:{
        type:Boolean,
        default: false
    },
    block:{
        type:Boolean,
        default: false
    }
});
Usermodel.index({email:1,friendemail:1},{unique:true});
module.exports = mongoose.model('User', Usermodel);

