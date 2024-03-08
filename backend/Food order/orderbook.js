var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var BookOrders= express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{db.collection('Bookordercounters').findOneAndUpdate(
            { _id: 'userId' },
            { $inc: { seq: 1 } },
            { upsert: true, returnOriginal: false },
            (err, counter) => {
                if (err) {
                    throw err;
                } else {
                    const userId = counter.value.seq; 
                    db.collection("BookOrders").insertOne({
                        ID: userId,
                        UserID:req.body.UserID,
                        items: req.body.items,
                        total:req.body.total

                    },(err,data)=>{
                        if(err){
                            throw err
                        }else{
                // res.send({message:"data inserted succesfully"});
                            res.send(data);
                        }
                        });
                }
            }
        );
    }
})
})
module.exports = BookOrders;