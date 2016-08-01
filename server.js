const assert     = require('assert'),
      bodyParser = require('body-parser'),
      express    = require('express'),
      mongo      = require('mongodb').MongoClient,
      ObjectId   = require('mongodb').ObjectId,
      path       = require('path'),
      shortid    = require('shortid'),
      app        = express(),
      port       = process.env.PORT || 8080;

let db;

app.use(express.static(path.join(__dirname, 'src')));


/****************
* GET ALL POLLS *
****************/
app.get('/api/polls', function(req, res) {
  db.collection('polls').find().toArray(function(err, docs) {
    res.json(docs);
  });
});


app.use(bodyParser.json());
/****************
* INSERT A POLL *
****************/
app.post('/api/polls/', function(req, res) {
  let newPoll = req.body;
  db.collection('polls').insertOne(newPoll, function(err, result) {
    if (err) console.log(err);
    let newId = result.insertedId;
    db.collection('polls').find({_id: newId}).next(function(err, doc) {
      if (err) console.log(err);
      res.json(doc);
    });
  });
});


/******************
* GET SINGLE POLL *
******************/
app.get('/api/polls/:pollid', function(req, res) {
  db.collection('polls').find({_id: req.params.pollid}).toArray(function(err, docs) {
    if (err) console.log(err);
    res.json(docs);
  });
});


/****************
* UPDATE A POLL *
****************/
app.put('/api/polls/:pollid', function(req, res) {
  let poll = req.body;
  db.collection('polls').updateOne({_id: poll._id}, {$set: {data: poll.data}}, function(err, r) {
    assert.equal(null, err);
    db.collection('polls').find({_id: poll._id}).next(function(err, doc) {
      if (err) console.log(err);
      res.send(doc);
    });
  });
});

/****************
* DELETE A POLL *
****************/
app.delete('/api/polls/:pollid', function(req, res) {
  let pollid = req.params.pollid;
  db.collection('polls').deleteOne( {_id: pollid}, function(err, r) {
    asset.equal(null, err);
    assert.equal(1, r.deletedCount);
  });
});


/**************************
* CONNECT TO THE DATABASE *
**************************/
mongo.connect('mongodb://localhost/polldb', function(err, dbConnection) {
  db = dbConnection;
  app.listen(port, () => console.log("Listening on port", port));
});
