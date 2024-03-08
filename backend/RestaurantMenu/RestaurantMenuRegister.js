var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var MenuRegister = express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{db.collection('menucounters').findOneAndUpdate(
            { _id: 'userId' },
            { $inc: { seq: 1 } },
            { upsert: true, returnOriginal: false },
            (err, counter) => {
                if (err) {
                    throw err;
                } else {
                    const userId = counter.value.seq; 
                    db.collection("RestuarantMenu").insertOne({
                        ID: userId,
                        Name:req.body.Name,
                        Price:req.body.Price,
                        Image:req.body.Image,
                        Category:req.body.Category,
                        Type:req.body.Type,
                        RestaurantId:req.body.RestaurantId,

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
module.exports = MenuRegister;