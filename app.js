const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, console.log('Server started on http://localhost:5000'));