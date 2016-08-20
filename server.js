const bodyParser = require('body-parser'),
      express  = require('express'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      path     = require('path'),
      routes   = require('./app/routes/routes'),
      session  = require('express-session');

const app  = express(),
      port = process.env.PORT || 8080;

require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
require('./app/data/setInitialData').setData();

app.use(express.static(process.cwd()));

app.use(session({
  secret: process.env.GITHUB_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

routes(app, passport);

app.listen(port, () => console.log(`Listening on port ${port} ...`));
