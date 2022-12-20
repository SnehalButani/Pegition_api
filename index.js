const express = require('express');
const app = express();
require('./connect/connection');
const router = require('./router/router');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);


const port = 8000 || process.env.port;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
