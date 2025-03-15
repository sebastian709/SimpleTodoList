
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {type: mongoose.Types.ObjectId, auto: true},
  name: { type: String, },
  contact: { type: Number,},
  address: { type: String},
  // groupID: {type: mongoose.Types.ObjectId},
  groupID: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'groups', // The name of the second collection
  },
  userLevelID:  {
    type: mongoose.Schema.Types.Mixed,
    ref: 'userLevels', // The name of the second collection
  },
},
{
  versionKey: false
}
);

const user = mongoose.model('users', userSchema);
module.exports = user;
