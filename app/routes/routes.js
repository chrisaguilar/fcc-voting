const Poll = require('../controllers/PollController');
const User = require('../controllers/UserController');

module.exports = (app, passport) => {

  app.route('/api/polls')
    .get((req, res) => Poll.getAll(res))
    .post((req, res) => Poll.add(req.body));

  app.route('/api/polls/:pollid')
    .delete((req, res) => Poll.delete(res, req.params.pollid))
    .get((req, res) => Poll.get(res, req.params.pollid))
    .put((req, res) => Poll.update(res, req.params.pollid, req.body));

  app.route('/api/user/:id')
    .get((req, res) => Poll.getMany(res, req.params.id));

  app.route('/auth/facebook')
    .get(passport.authenticate('facebook'));

  app.route('/auth/facebook/callback')
    .get(passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/'
    }));

  app.route('/auth/github')
    .get(passport.authenticate('github'));

  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/'
    }));

  app.route('/auth/google')
    .get(passport.authenticate('google', { scope: ['profile'] }));

  app.route('/auth/google/callback')
    .get(passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/'
    }));

  app.route('/auth/twitter')
    .get(passport.authenticate('twitter'));

  app.route('/auth/twitter/callback')
    .get(passport.authenticate('twitter', {
      successRedirect: '/',
      failureRedirect: '/'
    }))

  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/');
    });

  app.route('/verifyAuth')
    .get((req, res) => {
      if (req.isAuthenticated()) {
        res.json({ isLoggedIn: req.isAuthenticated(), user: req.user });
      } else {
        res.json({ isLoggedIn: req.isAuthenticated() });
      }
    });

  app.route('*')
    .get((req, res) => res.sendFile(process.cwd() + '/public/index.html'));
}
