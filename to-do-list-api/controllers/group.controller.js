const express = require('express');
const router = express.Router();

const group = require('../models/group.model');
const user = require('../models/user.model');

router.post('/', (req, res)=> {
  const obj = req.body;
  group.create(obj).then(doc =>{
    res.status(201).send(doc)
  }).
  catch(err=>{
    res.status(500).send(err);
  })
});

router.get('/', (req,res)=>{
  group.find().then(docs =>{
    res.send(docs);
  }).catch(err => {
    res.status(500).send(err);
  })
})

router.get('/:id',(req, res)=>{
  let id = req.params.id;
  group.findById(id).then(doc =>{
    res.send(doc);
  }).catch(err =>{
    res.status(500).send(err);
  })
});

router.put('/:id', (req, res)=>{
  let id = req.params.id;
  const obj = req.body;
  group.findByIdAndUpdate(id, {name: obj.name, contact: obj.contact, address: obj.address}, {new: true})
  .then((updatedDoc) =>{
    res.status(200).send(updatedDoc)
  })
  .catch(err => res.status(500).send(err))
});

router.delete("/:id", (req, res)=>{
  let id = req.params.id;
  group.findByIdAndDelete(id).then(() => res.status(200).send(true))
  .catch(err => res.status(500).send(err));
})

module.exports = router;