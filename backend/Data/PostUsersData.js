var express = require('express');
var app = express()
const bcrypt = require('bcrypt');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
const saltRounds = 10; 
var PostUsersData = express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{
            db.collection('usercounters').findOneAndUpdate(
                { _id: 'userId' },
                { $inc: { seq: 1 } },
                { upsert: true, returnOriginal: false },
                (err, counter) => {
                    if (err) {
                        throw err;
                    } else {
                        const userId = counter.value.seq; 
                        bcrypt.hash(req.body.Password, saltRounds, (err, hash) => {
                            if (err) {
                                throw err;
                            }

                        db.collection("UsersData").insertOne({
                            ID: userId,
                            Name:req.body.Name,
                            EmailId:req.body.EmailId,
                            Password:hash},(err,data)=>{
                            if(err){
                                throw err
                            }else{
                    // res.send({message:"data inserted succesfully"});
                                res.send(data);
                            }
                        
                        });
                    });
                }
            }
        );
    }
});
});

module.exports = PostUsersData;
