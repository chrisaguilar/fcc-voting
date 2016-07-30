#!/usr/bin/mongo

var db = new Mongo().getDB("polldb");

db.polls.remove({});

db.polls.insert([
  {
    author: "Christopher",
    title: "ES2015 vs ES6",
    data: [
      {name: "ES2015", votes: 5},
      {name: "ES6", votes: 4}
    ]
  },
  {
    author: "Christopher",
    title: "'MEEM' vs 'MAYMAY'",
    data: [
      {name: "MEEM", votes: 15},
      {name: "MAYMAY", votes: 2}
    ]
  },
  {
    author: "Christopher",
    title: "Favorite Color",
    data: [
      {name: "Red", votes: 12},
      {name: "Blue", votes: 19},
      {name: "Yellow", votes: 3},
      {name: "Green", votes: 5},
      {name: "Purple", votes: 2},
      {name: "Orange", votes: 3}
    ]
  },
  {
    author: "Christopher",
    title: "Modern v Traditional Art",
    data: [
      {name: "Modern", votes: 12},
      {name: "Traditional", votes: 38}
    ]
  },
  {
    author: "Christopher",
    title: "Preferred Art Type",
    data: [
      {name: "Asian", votes: 3},
      {name: "American", votes: 24},
      {name: "African", votes: 4},
      {name: "European", votes: 19}
    ]
  },
  {
    author: "Christopher",
    title: "Favorite Class",
    data: [
      {name: "English", votes: 15},
      {name: "Math", votes: 17},
      {name: "Science", votes: 12},
      {name: "Social Studies", votes: 10},
      {name: "Technical Education", votes: 13},
      {name: "Music / Art", votes: 12},
      {name: "Physical Education", votes: 15},
      {name: "Foreign Language", votes: 6}
    ]
  },
  {
    author: "Christopher",
    title: "Favorite Website",
    data: [
      {name: "Facebook", votes: 14},
      {name: "Twitter", votes: 10},
      {name: "reddit", votes: 8},
      {name: "YouTube", votes: 6},
      {name: "Pinterest", votes: 4},
      {name: "Tumblr", votes: 8}
    ]
  }
]);
