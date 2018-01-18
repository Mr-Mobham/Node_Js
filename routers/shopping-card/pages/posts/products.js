'use strict';
const express = require('express');
const router  = express.Router();
const con     = require('../../../../module/connection');


con.connect((err) =>{
    router.post('/products',(req,res)=>{
      const sql = `INSERT INTO notification
      (
        title
      )
      VALUES(
        '${req.body.title}'
      )
       `;
      con.query(sql,(err, response) =>{
         res.send({
           item    : req.body
         });
       });

    });





});








module.exports = router;
