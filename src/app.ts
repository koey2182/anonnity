import express from 'express';
import config from "./app_config";
import routes from "./routes";
import errorHandler from "./errors/error_handler";

const app = express();
const port = config.port;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

Object.entries(routes).forEach(([path, router]) => {
  app.use(path, router);
})

app.use(express.static('public'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});