// const fs = require('fs');
import fs from "fs";

const configPath = 'application.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export function getPort() {
  return config.port;
}

export function getAnonnityDatabaseConnectionInfo() {
  return config.databases.anonnityDb;
}

// module.exports = {
//   getPort,
//   getAnonnityDatabaseConnectionInfo
// };