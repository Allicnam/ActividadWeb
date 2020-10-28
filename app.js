const express = require("express"); 
const mongodb = require("mongodb");

const port = 8082; 

const app = express(); 
app.use(require("cors")()); 
app.use(require("body-parser").json()); 

const uri = "mongodb://Adrian:allicnam@cluster0-shard-00-00.ac1lu.mongodb.net:27017,cluster0-shard-00-01.ac1lu.mongodb.net:27017,cluster0-shard-00-02.ac1lu.mongodb.net:27017/Curriculum?ssl=true&replicaSet=atlas-114utf-shard-0&authSource=admin&retryWrites=true&w=majority"; // put your URI HERE


mongodb.MongoClient.connect(uri, (err, db) => {

    const collection = db.collection("exps");

  app.get("/experiencia", (req, res) => {

    collection.find({ title: "experiencia" }).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs);
      }
    });
  });

  app.get("/hobbies", (req, res) => {

    collection.find({ title: "hobbies" }).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });
  });

  app.get("/clases", (req, res) => {

    collection.find({ title: "clases" }).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs);
      }
    });
  });

  // listen for requests
  var listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
});