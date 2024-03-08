var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var ShowResData = express.Router().get('/:ID', (req, res) => {
  MongoClient.connect("mongodb://localhost:27017/CulinaryQuests", (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Error connecting to database');
      return;
    }

    const db = client.db('CulinaryQuests');
    db.collection("RestuarantData").findOne({ "ID": parseInt(req.params.ID) }, (err, data) => {
      if (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Error fetching data from database');
        return;
      }

      if (!data) {
        console.log('No data found for ID:', req.params.ID);
        res.status(404).send('No data found for the given ID');
      } else {
        console.log('Data found:', data);
        res.status(200).send(data);
      }

      client.close(); // Close the connection after processing the query
    });
  });
});

module.exports = ShowResData;
