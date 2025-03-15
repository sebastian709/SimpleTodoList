const user = require("../models/user.model");
const group = require("../models/group.model");
const userLevel = require('../models/groupLevel.model')

const userJoins = async (req, res) => {
  user
    .find()
    .populate({
      path: "groupID",
      model: "groups",
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
};

const userRights = async (req, res) =>{
  await userLevel.create(req.body).then((doc)=>{
    res.send(doc)
    .catch(err=>{
      res.send(err)
    })
  })
}

const deleteRights = async( req, res) =>{
  //code here
  res.send('delete')
}

module.exports = {
  userJoins,
  userRights,
  deleteRights
};