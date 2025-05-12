import config from "../app_config";
import pgPromise from "pg-promise";

const pgp = pgPromise();
const {username, password, host, port, database} = config.anonnityDbConnectionInfo;
const db = pgp({host, port, database, user: username, password});

export default db;