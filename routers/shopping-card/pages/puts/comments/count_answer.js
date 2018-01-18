const express = require('express');
const router  = express.Router();
const con = require('../../../../../module/connection');




con.connect((err) =>{
  router.put('/comments/:id',(req,res)=>{
    const sql = `UPDATE comments SET
      count = ${req.body.data.count}
      WHERE id       = '${req.params.id}'
    `;

      con.query(sql,(err, response) =>{
        res.send({
          item : req.body
        });
    });
  });


});



module.exports = router;
