var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var PostOrders= express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{db.collection('ordercounters').findOneAndUpdate(
            { _id: 'userId' },
            { $inc: { seq: 1 } },
            { upsert: true, returnOriginal: false },
            (err, counter) => {
                if (err) {
                    throw err;
                } else {
                    const userId = counter.value.seq; 
                    db.collection("Orders").insertOne({
                        ID: userId,
                        UserID:req.body.UserID,
                        name: req.body.name,
                        phoneNumber: req.body.phoneNumber,
                        address: req.body.address,
                        paymentMethod:req.body.paymentMethod,
                        cardNumber: req.body.cardNumber,
                        cardHolderName: req.body.cardHolderName,
                        expirationDate: req.body.expirationDate,
                        cvv: req.body.cvv,

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
module.exports = PostOrders;