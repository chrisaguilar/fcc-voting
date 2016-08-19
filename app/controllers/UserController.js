const User = require('../data/models/users');

module.exports = {
  get: function(user) {
    console.log(`Getting user ${user}.`);
  },

  getAll: function() {
    console.log(`Getting all users.`);
    User.find((err, docs) => {
      if (err) console.error(err);
      else console.log(docs);
    });
  },

  new: function(user) {
    console.log(`Creating user ${user}.`);
  }
}
