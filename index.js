const express = require("express");
const port = 3000;
const host = '0.0.0.0';
const app = express();

var login = require("./login.js");

app.use('/',login);

app.listen(port,host);