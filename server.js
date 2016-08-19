const bodyParser = require('body-parser'),
      express  = require('express'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      path     = require('path'),
      routes   = require('./app/routes/routes'),
      session  = require('express-session'),
      setInitialData = require('./app/data/setInitialData');

const app  = express(),
      port = process.env.PORT || 8080;

require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
setInitialData.setData();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

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
