let mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

let User = new Schema({
  _id: String,
  github: {
    id: String,
    displayName: String,
    username: String
  },
  polls: Array
}, {versionKey: false});

module.exports = mongoose.model('User', User);
