const express = require('express');
const router  = express.Router();
const mysql   = require('mysql');

let con = mysql.createConnection({
  host      : "127.0.0.1",
  user      : "root",
  password  : "",
  database  : 'shopping_form'
});


module.exports = con;
