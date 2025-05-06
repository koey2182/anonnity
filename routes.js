const home = require('./routes/home');
const auth = require('./routes/auth');
const members = require('./routes/members');

const routes = {
  '/': home,
  '/auth': auth,
  '/members': members
}

module.exports = routes;