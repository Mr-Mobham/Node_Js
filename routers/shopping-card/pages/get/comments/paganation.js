const express = require('express');
const router  = express.Router();
const con = require('../../../../../module/connection');




con.connect((err) =>{
  router.get('/comments/:id/:count',(req,res)=>{
    const id     = req.params.id;
    const count  = req.params.count
    const total  = ((id - 1)*count);
    const sql = `SELECT * FROM comments
    LIMIT ${total},${count}
    `;

      con.query(sql,(err, response) =>{
        res.send({
          item : response
        });
    });
  });


});



module.exports = router;
