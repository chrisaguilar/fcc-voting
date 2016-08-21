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
    "title": "How often do you program?",
    "data": [
      {"name": "Seldom", "votes": 9},
      {"name": "Yearly", "votes": 8},
      {"name": "Daily", "votes": 15},
      {"name": "Never", "votes": 20},
      {"name": "Weekly", "votes": 8},
      {"name": "Often", "votes": 22},
      {"name": "Monthly", "votes": 18}
    ]
  },
  {
    "_id": "dogPzIz8",
    "author": "server",
    "title": "What continent do you live on?",
    "data": [
      {"name": "North America", "votes": 22},
      {"name": "South America", "votes": 28},
      {"name": "Africa", "votes": 7},
      {"name": "Europe", "votes": 26},
      {"name": "Australia", "votes": 4},
      {"name": "Asia", "votes": 13}
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
      {"name": "Music", "votes": 7},
      {"name": "Art", "votes": 5},
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
    "title": "What languages do you speak?",
    "data": [
      {"name": "English", "votes": 50},
      {"name": "French", "votes": 15},
      {"name": "Spanish", "votes": 20},
      {"name": "German", "votes": 10},
      {"name": "Italian", "votes": 5}
    ]
  },
  {
    "_id": "23TplPdS",
    "author": "server",
    "title": "Cats vs Dogs",
    "data": [
      {"name": "Cats", "votes": 10},
      {"name": "Dogs", "votes": 8}
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
