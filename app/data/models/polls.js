let mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

let Poll = new Schema({
  _id: String,
  author: String,
  title: String,
  data: Array
}, {versionKey: false});

module.exports = mongoose.model('Poll', Poll);
