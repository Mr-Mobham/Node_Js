const express = require('express');
const router  = express.Router();
const con     = require('../../../../../../module/connection');




con.connect((err) =>{
  router.get('/posts_advice',(req,res)=>{
    const sql = `SELECT * FROM posts_advice
    `;
     let Arry = [];
      con.query(sql,(err, response) =>{
        const len = response.length;
        for (let i = len - 2; i < response.length; i++) {
           Arry = [...Arry,response[i]];
        }
        res.send({
          item : Arry
        });

    });
  });


});

module.exports = router;
