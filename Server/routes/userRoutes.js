const express = require('express')
const User = require('../models/userModel.js')
const { getToken, isAuth } = require('../util.js')
const bcrypt = require('bcryptjs')
const compareSync = require('bcryptjs')

const bcryptsalt = 8;

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      
          const registerUser = await User.findOne({
            email: req.body.email,
          });

          console.log("dsfsdf",registerUser);
          if(!registerUser){
            
                const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                mobile:req.body.mobile,
                });
    
            const newUser = await user.save();

                if (newUser) {
                    return res.send({
                    flag:true,
                    user:newUser,
                    });
                } else {
                    return res.status(401).send({ message: 'Invalid User Data.' });
                }
            }
            else {
            return res.status(401).send({ message: 'User Email-Id Already Exist' });
            }
      
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
          
  });


  router.post('/signin', async (req, res) => {
    try {
        const signinUser = await User.findOne({ email: req.body.email });
        if (signinUser) {
          if (bcrypt.compareSync(req.body.password, signinUser.password)) {          
            return res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            mobile:signinUser.mobile,
            token: getToken(signinUser),
            });
          }
        }
          return res.status(401).send({ message: 'Invalid Email or Password.' });
      
    } catch (error) {
        return res.send(error);
    }
      
    });

    module.exports = router; 