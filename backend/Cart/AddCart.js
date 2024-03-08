var express = require('express');
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var AddCart = express.Router().post('/',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests",(err,db)=>{
        if(err){
            throw err
        }else{db.collection('cartcounters').findOneAndUpdate(
            { _id: 'userId' },
            { $inc: { seq: 1 } },
            { upsert: true, returnOriginal: false },
            (err, counter) => {
                if (err) {
                    throw err;
                } else {
                    const userId = counter.value.seq; 
                    db.collection("Cart").insertOne({
                        ID: userId,
                        UserID:req.body.UserID,
                        menuId:req.body.menuId,
                        Name:req.body.Name,
                        Price:req.body.Price,
                        ItemImage:req.body.ItemImage,
                        quantity:parseInt(1)

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
module.exports = AddCart;