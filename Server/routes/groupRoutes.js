const express = require('express')
const User = require('../models/userModel.js')
const Group = require('../models/groupModel.js')


const router = express.Router();

router.post('/create', async (req, res) => {
    try {  
          const user = await User.findOne({
            _id: req.body._id,
          });
          const groupId = Math.random().toString(36).slice(2, 10);
          const memb = [];
          memb.push(
              {
                  "userId":user._id,
                  "name":user.name,
                  "email":user.email
              }
          );
          const newGroup = new Group({
                groupId:groupId,
                name:req.body.name,
                members:memb
            });

            const savedGroup = await newGroup.save();
            user.groups.push(savedGroup);
            await user.save();
            res.send({
                "flag":true,
                groupId,
                savedGroup
            })

    } catch (error) {
      console.log(error);
      return res.send(error);
    }
          
  });


  router.post('/join', async (req, res) => {
    try {  
          const user = await User.findOne({
            _id: req.body._id,
          });

          const group = await Group.findOne({
            groupId: req.body.groupId
          })
          const memb = {
                  "userId":user._id,
                  "name":user.name,
                  "email":user.email
              }
            group.members.push(memb);
            const savedGroup = await group.save();
            user.groups.push(savedGroup);
            await user.save();
            res.send({
                "flag":true,
                savedGroup
            })

    } catch (error) {
      console.log(error);
      return res.send(error);
    }
          
  });

    module.exports = router; 