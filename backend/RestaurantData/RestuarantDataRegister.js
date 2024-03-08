var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DataRegister = express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{db.collection('datacounters').findOneAndUpdate(
            { _id: 'userId' },
            { $inc: { seq: 1 } },
            { upsert: true, returnOriginal: false },
            (err, counter) => {
                if (err) {
                    throw err;
                }else {
            const userId = counter.value.seq; 
            db.collection("RestuarantData").insertOne({
                ID: userId,
                Name:req.body.Name,
                Location:req.body.Location,
                Image:req.body.Image,
                Cuisines:req.body.Cuisines,
                Timings:req.body.Timings,
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

module.exports = DataRegister;
