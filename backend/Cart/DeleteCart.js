var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DeleteCart = express.Router().delete('/:ID',(req,res)=>{
    console.log(req.body.ID);
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("Cart").deleteOne({"ID":parseInt(req.params.ID)},(err,data) =>{
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
module.exports= DeleteCart;