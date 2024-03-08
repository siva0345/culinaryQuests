var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var UpdateUsersData = express.Router().put('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("UsersData").updateOne(
                {"ID":req.body.ID},
                {
                    $set:{
                        "Name":req.body.Name,
                        "EmailId":req.body.EmailId,
                        "Password":req.body.Password
                }},
                (err,data)=>{
                if(err){
                    throw err
                }else{
                    res.send({message:"data updated succesfully"});
                    res.send(data);
                }
            })
        }
    })
})
module.exports= UpdateUsersData;