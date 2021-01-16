const express = require("express");
const { db, deleteMany } = require("../models/user");
const router = express.Router();
const User= require('../models/user');
const delay = (ms) => new Promise((res) => setTimeout(res, ms));


//get commonfriends
router.get("/commonfriends/:email/:friendemail", async (req, res) => {
    var friendlist = await getfriends(req.params.email);
    var friendlist2 = await getfriends(req.params.friendemail);    
    var commonfriend=[]
    for (i of friendlist){
        if (friendlist2.includes(i)){
            commonfriend.push({friendemail:i});
            }
    }
    console.log(commonfriend);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.json( commonfriend);
});

//get all friends
router.get("/getfriends/:email", async (req, res) => {
    try{
            User.find({ email: req.params.email }).select(
            "friendemail -_id subscription block"
        ).then(data=>res.json(data));
    }catch{
        res.status(400).json("error within server");
    }
    
});

async function getfriends(emailx){
    var friendlist = [];
    var query = User.find({ email: emailx }).select(
            "friendemail -_id"
        );
    await query.exec(function (err, friendemail) {
            if (err) return next(err);
            for (var i = 0; i < friendemail.length; i++) {
                friendlist.push(friendemail[i].friendemail);
            }
        })
    await delay(500)
    return friendlist;
}


//create account link
router.post("/linkaccount", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    const user = new User({
        email: req.body.email,
        friendemail: req.body.friendemail
    });
    console.log("test");
    console.log( req.body.email);
    user.save()
        .then(data=>res.json("Creation successful"+data ))
        .catch(err=>res.json({
        message: err
    }));    
});

//update subcription by link id and res body 
router.put("/subscription/:email/:friendemail", async(req,res)=>{
    try{
        const updateduser=await User.updateOne(
            {email: req.params.email, friendemail:req.params.friendemail},
            {$set:{subscription: req.body.subscription}}
            );
        res.json(updateduser);
    }catch (err){
        res.json({message:err});
    }
});

//update block by link id (url param) and resbody
router.put("/block/:email/:friendemail", async (req, res) => {
  try {
    const updateduser = await User.updateOne(
      { email:req.params.email,friendemail: req.params.friendemail },
      { $set: { block: req.body.block } }
    );
    res.json(updateduser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
