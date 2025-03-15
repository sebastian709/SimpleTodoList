const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupchema = new Schema({
  _id: {type: mongoose.Types.ObjectId, auto: true},
  userID: { type: mongoose.Types.ObjectId, required: true},
  groupName: { type: String, required: true},
  
},
{
  versionKey: false
}
);

const groups = mongoose.model('groups', groupchema);
module.exports = groups;