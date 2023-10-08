//app.js
// Sofiia Romashova
// 301303223
// October 8, 2023

const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const path = require('path');

// Import your routes
const routes = require('./routes/index'); 

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/images'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the imported routes
app.use('/', routes);

app.listen(port, () => console.info(`App listening on port ${port}`));