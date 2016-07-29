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
    author: "Kurt",
    title: "'MEEM' vs 'MAYMAY''",
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
  }
]);
