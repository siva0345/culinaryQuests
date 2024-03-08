var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var BookDine = express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{db.collection('Dinecounters').findOneAndUpdate(
            { _id: 'userId' },
            { $inc: { seq: 1 } },
            { upsert: true, returnOriginal: false },
            (err, counter) => {
                if (err) {
                    throw err;
                } else {
                    const userId = counter.value.seq; 
                    db.collection("DineIn").insertOne({
                        ID: userId,
                        UserID:req.body.UserID,
                        Preference:req.body.Preference,
                        TableSize:req.body.TableSize,
                        SelectedDate:req.body.SelectedDate,
                        SelectedTime:req.body.SelectedTime,

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
module.exports = BookDine;