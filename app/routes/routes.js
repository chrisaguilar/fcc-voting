const PollController = require('../controllers/PollController');
const UserController = require('../controllers/UserController');

module.exports = (app, passport) => {

  app.route('/api/polls')
    .get((req, res) => {
      PollController.getAll(res);
    })
    .post((req, res) => {
      PollController.add(req.body);
    });

  app.route('/api/polls/:pollid')
    .delete((req, res) => {
      PollController.delete(res, req.params.pollid);
    })
    .get((req, res) => {
      PollController.get(res, req.params.pollid);
    })
    .put((req, res) => {
      PollController.update(res, req.params.pollid, req.body);
    });

  app.route('/api/user/:id')
    .get((req, res) => {
      PollController.getMany(res, req.params.id);
    });

  app.route('/auth/github')
    .get(passport.authenticate('github'));

  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

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

  app.route('/*')
    .get((req, res) => {
      res.sendFile(process.cwd() + '/public/index.html');
    });
}
