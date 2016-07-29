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
  db.collection('polls').find({_id: ObjectId(req.params.pollid)}).toArray(function(err, docs) {
    if (err) console.log(err);
    res.json(docs);
  });
});


/****************
* UPDATE A POLL *
****************/
app.put('/api/polls/:pollid', function(req, res) {
  let poll = req.body;
  // ensure we don't have the _id itself as a field, it's disallowed to modfiy the _id.
  delete (poll._id);
  let oid = ObjectId(req.params.pollid);
  db.collection('polls').updateOne({_id: oid}, poll, function(err, result) {
    if (err) console.log(err);
    db.collection('polls').find({_id: oid}).next(function(err, doc) {
      if (err) console.log(err);
      res.send(doc);
    });
  });
});


/**************************
* CONNECT TO THE DATABASE *
**************************/
mongo.connect('mongodb://localhost/polldb', function(err, dbConnection) {
  db = dbConnection;
  app.listen(port, () => console.log("Listening on port", port));
});
