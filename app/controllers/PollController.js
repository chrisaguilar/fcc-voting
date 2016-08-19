const Poll = require('../data/models/polls');

module.exports = {
  add: function(poll) {
    let newpoll = new Poll();

    newpoll._id = poll._id;
    newpoll.author = poll.author;
    newpoll.title = poll.title;
    newpoll.data = poll.data

    newpoll.save();
  },

  delete: function(res, pollid) {
    Poll.findOneAndRemove({ _id: pollid }, function(err, doc) {
      if (err) console.error(err);
    });
  },

  get: function(res, pollid) {
    Poll.findOne({ _id: pollid }, (err, doc) => {
      if(err) console.error(err);
      else res.send(doc);
    });
  },

  getAll: function(res) {
    Poll.find((err, docs) => {
      if (err) console.error(err);
      else res.send(docs);
    });
  },

  getMany: function(res, pollauthor) {
    Poll.find({ author: pollauthor }, (err, docs) => {
      if (err) console.error(err);
      else res.send(docs);
    });
  },

  update: function(res, pollid, newpoll) {
    Poll.findOneAndUpdate({ _id: pollid }, newpoll, {new: true}, (err, docs) => {
      if (err) console.error(err);
      else res.send(docs);
    });
  }
}
