'use strict';
const express = require('express');
const router  = express.Router();
const con     = require('../../../../../module/connection');


con.connect((err) =>{
    router.post('/answer_comments',(req,res)=>{
      const sql = `INSERT INTO answer_comments
      (
        id,
        parent_id,
        description,
        like_comment,
        author,
        unlike,
        dynamic_date
      )
      VALUES(
        '${req.body.data.id}',
        '${req.body.data.parent_id}',
        '${req.body.data.description}',
        '${req.body.data.like_comment}',
        '${req.body.data.author}',
        '${req.body.data.unlike}',
        '${req.body.data.dynamic_date}'
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
