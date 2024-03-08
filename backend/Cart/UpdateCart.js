var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var UpdateCart = express.Router().put('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection("Cart").updateOne(
                {"ID":req.body.ID},
                {
                    $set:{
                        quantity: req.body.quantity
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
module.exports= UpdateCart;