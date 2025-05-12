import fs from "fs";
const configPath = '.application.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export default {
  port: config.port,
  anonnityDbConnectionInfo: config.databases.anonnityDb,
  jwtSecretKey: config.jwt.secretKey
}