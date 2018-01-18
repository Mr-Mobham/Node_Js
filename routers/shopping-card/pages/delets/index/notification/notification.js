const express = require('express');
const router  = express.Router();
const con = require('../../../../../../module/connection');

con.connect((err) =>{
    router.delete('/notifications/:id',(req,res,next)=>{
      const params = req.params;
      const select_delete = `DELETE FROM notification
        WHERE id = ${params.id}
       `;
      con.query(select_delete,(err, response) =>{
      res.send({
        item : req.body
      });
    });
  });

});




module.exports = router;
