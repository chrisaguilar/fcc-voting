const Poll = require('./models/polls');

const initialData = [
  {
    "_id": "2WEKaVNO",
    "author": "server",
    "title": "Favorite Color",
    "data": [
      {"name": "Red", "votes": 12},
      {"name": "Blue", "votes": 19},
      {"name": "Yellow", "votes": 3},
      {"name": "Green", "votes": 5},
      {"name": "Purple", "votes": 2},
      {"name": "Orange", "votes": 3}
    ]
  },
  {
    "_id": "7oet_d9Z",
    "author": "server",
    "title": "Modern vs Traditional Art",
    "data": [
      {"name": "Modern", "votes": 12},
      {"name": "Traditional", "votes": 38}
    ]
  },
  {
    "_id": "dogPzIz8",
    "author": "server",
    "title": "Preferred Art Type",
    "data": [
      {"name": "Asian", "votes": 3},
      {"name": "American", "votes": 24},
      {"name": "African", "votes": 4},
      {"name": "European", "votes": 19}
    ]
  },
  {
    "_id": "dBvJIh-H",
    "author": "server",
    "title": "Favorite Class",
    "data": [
      {"name": "English", "votes": 15},
      {"name": "Math", "votes": 17},
      {"name": "Science", "votes": 12},
      {"name": "Social Studies", "votes": 10},
      {"name": "Technical Education", "votes": 13},
      {"name": "Music / Art", "votes": 12},
      {"name": "Physical Education", "votes": 15},
      {"name": "Foreign Language", "votes": 6}
    ]
  },
  {
    "_id": "46Juzcyx",
    "author": "server",
    "title": "Favorite Website",
    "data": [
      {"name": "Facebook", "votes": 14},
      {"name": "Twitter", "votes": 10},
      {"name": "reddit", "votes": 8},
      {"name": "YouTube", "votes": 6},
      {"name": "Pinterest", "votes": 4},
      {"name": "Tumblr", "votes": 8}
    ]
  },
  {
    "_id": "eWRhpRV",
    "author": "server",
    "title": "ES2015 vs ES6",
    "data": [
      {"name": "ES2015", "votes": 5},
      {"name": "ES6", "votes": 4}
    ]
  },
  {
    "_id": "23TplPdS",
    "author": "server",
    "title": "'MEEM' vs 'MAYMAY'",
    "data": [
      {"name": "MEEM", "votes": 15},
      {"name": "MAYMAY", "votes": 2}
    ]
  }
]

module.exports = {
  setData: function() {
    initialData.map((d) => {
      let poll = new Poll();
      poll._id = d._id;
      poll.author = d.author;
      poll.title = d.title;
      poll.data = d.data;

      poll.save();
    });
  }
}
