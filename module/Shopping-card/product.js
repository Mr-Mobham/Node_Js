const express = require('express');
const router  = express.Router();
// const cosn     = require("../database.js");
const mysql   = require('mysql');
let con = mysql.createConnection({
  host      : "127.0.0.1",
  user      : "root",
  password  : "",
  database  : 'test'
});

con.connect((err) =>{
  router.get('/ninjda/:id',(req,res)=>{
      const items = `SELECT * FROM customers
      WHERE id = ${req.params.id}
      `;
      con.query(items,(err, response) =>{
      res.send({
        item : response
      });
    });

  });



});











module.exports = router;
