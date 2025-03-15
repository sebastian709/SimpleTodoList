const express = require('express');
const router = express.Router();

const user = require('../models/user.model');
const group = require('../models/group.model')

const groupLevels = require('../models/groupLevel.model')

router.post('/', (req, res)=> {
  const obj = req.body;
  user.create(obj).then(doc =>{
    res.status(201).send(doc)
  }).
  catch(err=>{
    res.status(500).send(err);
  })
});

router.get('/', (req, res) => {
  user.find()
    .populate({
      path: 'groupID',
      model: 'groups',
      select: 'groupName',
      as: 'userGroup'
    })
    .populate({
      path: 'userLevelID',
      model: 'groupLevels',
      select: 'accessRights',
      as: 'groupLevels'
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/:id',(req, res)=>{
  let id = req.params.id;
  user.findById(id).then(doc =>{

    group.find({'userID': doc._id}).then(usergroups =>{
      const data = {
        doc,
        usergroups
    }
      res.send(data)
    }).catch(err => {
      res.status(500).send(err)
    });
  }).catch(err =>{
    res.status(500).send(err);
  })
});

router.put('/:id', (req, res)=>{
  let id = req.params.id;
  const obj = req.body;
  user.findByIdAndUpdate(id, {name: obj.name, contact: obj.contact, address: obj.address, userLevelID: obj.userLevelID}, {new: true})
  .then((updatedDoc) =>{
    res.status(200).send(updatedDoc)
  })
  .catch(err => res.status(500).send(err))
});

router.delete("/:id", (req, res)=>{
  let id = req.params.id;
  user.findByIdAndDelete(id).then(() => res.status(200).send(true))
  .catch(err => res.status(500).send(err));
})

router.patch("/:id", (req, res)=>{
  let id = req.params.id;
  const obj = req.body;
  user.findByIdAndUpdate(id, {groupID: obj.groupID}, {new: false})
  .then((updatedDoc) =>{
    res.status(200).send(updatedDoc)
  })
  .catch(err => res.status(500).send(err))
})


module.exports = router;