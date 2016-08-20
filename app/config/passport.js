const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const TwitterStrategy = require('passport-twitter').Strategy;
const shortid = require('shortid');
const User = require('../data/models/users');
const configAuth = require('./auth');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({ 'facebook.id': profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
          let newUser = new User();

          newUser._id = shortid.generate();
          newUser.facebook.id = profile.id;
          newUser.facebook.displayName = profile.displayName;

          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({ 'github.id': profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
          let newUser = new User();

          newUser._id = shortid.generate();
          newUser.github.id = profile.id;
          newUser.github.username = profile.username;
          newUser.github.displayName = profile.displayName;

          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({ 'google.id': profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
          let newUser = new User();

          newUser._id = shortid.generate();
          newUser.google.id = profile.id;
          newUser.google.displayName = profile.displayName;

          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use(new TwitterStrategy({
    consumerKey: configAuth.twitterAuth.consumerKey,
    consumerSecret: configAuth.twitterAuth.consumerSecret,
    callbackURL: configAuth.twitterAuth.callbackURL
  }, function(token, tokenSecret, profile, done) {
    process.nextTick(function() {
      User.findOne({ 'twitter.id': profile.id_str }, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
          let newUser = new User();

          newUser._id = shortid.generate();
          newUser.twitter.id = profile.id_str;
          newUser.twitter.name = profile.name;
          newUser.twitter.screen_name = profile.screen_name;

          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));
}
