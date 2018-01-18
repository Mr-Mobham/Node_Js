const express = require('express');
const router  = express.Router();
const con     = require('../../../../../module/connection');


con.connect((err) =>{
    router.put('/answer_comments/:id',(req,res)=>{
      let $req = '';
      if (req.body.data.unlike) {
        $result =  `unlike   = '${req.body.data.unlike}'`;
      }
      else {
        $result =  `like_comment   = '${req.body.data.like}'`;
      }
      const sql = `UPDATE answer_comments SET
        ${$result}
        WHERE id       = '${req.params.id}'
      `;
      con.query(sql,(err, response) =>{
         res.send({
           item    : req.body
         });
       });

    });





});








module.exports = router;
