'use strict';
const express = require('express');
const router  = express.Router();
const con = require('../../../../module/connection');


con.connect((err) =>{
    router.put('/products/:id',(req,res)=>{
      const sql = `UPDATE products SET
      title      = '${req.body.title}',
      descrption = '${req.body.descrption}'
      WHERE id   = ${req.params.id}
      `;
      con.query(sql ,[sql],(err, response) =>{
         res.send({
           item    : req.body
         });
       });

    });





});








module.exports = router;
