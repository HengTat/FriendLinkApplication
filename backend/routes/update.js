const { json } = require('body-parser');
const express= require('express');
const router= express.Router();
const Updates = require("../models/updates");
const User = require("../models/user");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));



router.get("/getfriendswithupdates/:email", (req, res) => {
  User.find({email: req.params.email,subscription: true, block: false, })
  .select("friendemail -_id")
  .then(data=> res.json(data));
});

router.get("/getupdates/:email",async(req,res)=>{
  var friendlist=[]
  var query = User.find({
    email: req.params.email,
    subscription: true,
    block: false,
  }).select("friendemail -_id");
  await query.exec(function (err,friendemail){
    if (err) return next (err);
    for(var i =0; i < friendemail.length;i++){
      friendlist.push(friendemail[i].friendemail);
    }
  });
  await delay(500);
  Updates.find({friendemail:req.params.email,email:friendlist }).select("email description -_id").then(data=>res.json(data));
});

router.post("/postupdates", (req, res) => {
    const updates = new Updates({
      description: req.body.description,
      email:req.body.email,
      friendemail:req.body.friendemail
    });
    console.log(updates)
    updates.save()
    .then(data=>res.json(data))
    .catch(err=>res.json({message: err}));
});


module.exports=router;