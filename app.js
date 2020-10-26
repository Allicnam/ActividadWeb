const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3000,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const app = express();

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.listen('3000', () => {
    console.log('Sever started on port 3000');
});
