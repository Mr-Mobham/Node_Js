const express = require('express');
const router  = express.Router();
const con = require('../../../../../module/connection');




con.connect((err) =>{
  router.get('/answer_comments',(req,res)=>{
    const sql = `SELECT * FROM answer_comments
    `;
      con.query(sql,(err, response) =>{
        res.send({
          item : response
        });
    });
  });


});



module.exports = router;
