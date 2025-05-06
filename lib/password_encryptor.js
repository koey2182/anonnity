const bcrypt = require('bcrypt');

const saltRounds = 10;

async function encrypt(row) {
  return bcrypt.hash(row, saltRounds);
}

module.exports = {
  encrypt
}