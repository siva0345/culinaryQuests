var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ShowMenu = express.Router().get('/:id',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection("RestuarantMenu").find({RestaurantId :parseInt(req.params.id)}).toArray((err,data)=>{
                if(err){
                    throw err;
                }else{
                    if(data.length>0){
                        res.send(data);
                    }else{
                        res.send(data);
                    }
                }
            })
        }
    })
})
module.exports = ShowMenu;