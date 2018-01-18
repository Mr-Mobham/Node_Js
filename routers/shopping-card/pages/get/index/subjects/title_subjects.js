const express = require('express');
const router  = express.Router();
const con = require('../../../../../../module/connection');




con.connect((err) =>{
  router.get('/title_subjects',(req,res)=>{
    const sql = `SELECT * FROM title_subjects
    `;
      con.query(sql,(err, response) =>{
        res.send({
          item : response
        });
    });
  });


});

module.exports = router;
