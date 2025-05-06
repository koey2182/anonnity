const express = require('express');
const {getPort} = require('./app_config');
const app = express();
const port = getPort();
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

Object.entries(routes).forEach(([path, router]) => {
  app.use(path, router);
})

app.use(express.static('public'));

const errorHandler = require('./errors/error_handler');
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});