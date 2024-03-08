var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DeleteUsersData = express.Router().delete('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("UsersData").deleteOne({"ID":req.body.ID},(err,data) =>{
                if(err){
                    throw err;
                }else{
                    res.send({message:"data deleted"});
                    db.close();
                }
            })
        }
    })
})
module.exports= DeleteUsersData;