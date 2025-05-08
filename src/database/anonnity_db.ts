import { getAnonnityDatabaseConnectionInfo } from "../app_config";
import pgPromise from "pg-promise";

const pgp = pgPromise();
const {username, password, host, port, database} = getAnonnityDatabaseConnectionInfo();
const db = pgp({host, port, database, user: username, password});

export default db;