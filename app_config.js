const fs = require('fs');

const configPath = 'application.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

function getPort() {
  return config.port;
}

function getAnonnityDatabaseConnectionInfo() {
  return config.databases.anonnityDb;
}

module.exports = {
  getPort,
  getAnonnityDatabaseConnectionInfo
};