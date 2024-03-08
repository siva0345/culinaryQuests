var express = require('express');
var app = express();
var mongodb = require('mongodb');
const bcrypt = require('bcrypt');
var MongoClient = mongodb.MongoClient;

var LoginUser = express.Router().get('/:EmailId/:Password', (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/CulinaryQuests", (err, db) => {
        if (err) {
            console.error('Database connection error:', err);
            res.send(false); // Send error response
        } else {
            db.collection("UsersData").findOne({ "EmailId": req.params.EmailId }, (err, userData) => {
                if (err) {
                    console.error('Error finding user:', err);
                    res.send(false); // Send error response
                } else if (!userData) {
                    res.send(false); // Email not found
                } else {
                    bcrypt.compare(req.params.Password, userData.Password, (err, result) => {
                        if (err) {
                            console.error('Password comparison error:', err);
                            res.send(false); // Send error response
                        } else if (result === true) {
                            res.send(userData); // Passwords match
                        } else {
                            res.send(false); // Passwords do not match
                        }
                    });
                }
            });
        }
    });
});

module.exports = LoginUser;
