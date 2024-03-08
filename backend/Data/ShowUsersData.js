var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ShowUsersData = express.Router().get('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection("UsersData").find({}).toArray((err,data)=>{
                if(err){
                    throw err;
                }else{
                    if(data.length>0){
                        res.send(data);
                    }else{
                        res.send("no records in this collection");
                    }
                }
            })
        }
    })
})
module.exports = ShowUsersData;