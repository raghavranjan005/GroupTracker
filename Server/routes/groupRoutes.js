const express = require('express')
const Group = require('../models/groupModel.js')


const router = express.Router();

router.post('/create', async (req, res) => {
    try {  
          const registerUser = await User.findOne({
            email: req.body.email,
          });

    } catch (error) {
      console.log(error);
      return res.send(error);
    }
          
  });

    module.exports = router; 