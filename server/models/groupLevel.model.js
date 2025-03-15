
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupchema = new Schema({
  _id: {type: mongoose.Types.ObjectId},
  accessRights: { type: String, required: true}
  
},
{
  versionKey: false
}
);

const groups = mongoose.model('groupLevels', groupchema);
module.exports = groups;
