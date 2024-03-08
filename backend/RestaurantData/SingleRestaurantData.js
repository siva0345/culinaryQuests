var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ShowResData = express.Router().get('/:ID',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection("RestuarantData").findOne({"ID":parseInt(req.params.ID)}),((err,data)=>{
                if(err){
                    throw err;
                }else{
                    if(!data){
                        res.send(false);
                    }else{
                        res.send(true);
                        db.close();
                    }
                }
            })
        }
    })
})
module.exports = ShowResData;