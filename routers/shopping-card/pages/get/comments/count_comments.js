const express = require('express');
const router  = express.Router();
const con = require('../../../../../module/connection');




con.connect((err) =>{
  router.get('/count_comments',(req,res)=>{
    const sql = `SELECT COUNT(id) id FROM comments
    `;

      con.query(sql,(err, response) =>{
        res.send({
          item : response
        });
    });
  });


});



module.exports = router;
