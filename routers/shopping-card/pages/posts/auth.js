'use strict';
const express = require('express');
const router  = express.Router();
const con     = require('../../../../module/connection');
const jwt     = require('jsonwebtoken');






con.connect((err) =>{
    router.get('/jsonwebtoken',(req,res)=>{
      const sql = `SELECT * FROM
      authentication
      `;
      con.query(sql,(err, response) =>{
        const Sign_User = jwt.sign({
          name : response[1].username,
          password : 13645
        },"newUser");
        jwt.verify(Sign_User, 'newUser', (err, decoded) =>{
          console.log(decoded);
        });
        const h3 = `<div className="mobham">dsdsadsads</div>`;
          res.send(h3);
          // res.send({
          //   item    : response,
          //   token   : Sign_User,
          // });
       });

    });





});








module.exports = router;
