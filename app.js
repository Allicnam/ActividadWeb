const express = require('express');
const mongoose = require('mongoose');


mongoose
  .connect('mongodb+srv://Adrian:allicnam@cluster0.ac1lu.mongodb.net/Curriculum?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Error", err));
 
const schema = mongoose.Schema({
  title : String,
  texto1 : String,
  texto2 : String,
  texto3 : String,
  texto4 : String
});
const Experiencia = mongoose.model("exp", schema);
  
var app = express();

app.get("/experiencia", (req, res) => {
    
    Experiencia.find({}, (err, doc) => {
    if (err) throw err;
    res.status(200).send(doc);
    });
});

app.listen(8082, function () {
    console.log("Listening on port 8082!");
  });