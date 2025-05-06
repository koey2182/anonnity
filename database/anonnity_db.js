const {username, password, host, port, database} = require('../app_config').getAnonnityDatabaseConnectionInfo();
const pgp = require('pg-promise')();
const db = pgp({host, port, database, user: username, password});

module.exports = db;