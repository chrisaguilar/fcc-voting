let mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

let User = new Schema({
  _id: String,
  facebook: {
    id: String,
    displayName: String
  },
  github: {
    id: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    displayName: String
  },
  polls: Array,
  twitter: {
    id: String,
    name: String,
    screen_name: String
  }
}, {versionKey: false});

module.exports = mongoose.model('User', User);
