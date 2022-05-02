const express = require("express")

const router = express.Router();

router.post('/create',async(req,res)=>{
  console.log("ss");
    try {
      res.send({tick:req.body.t+1});
      return;
    } catch (error) {
     return  res.send(error)
    }
  })


module.exports = router;