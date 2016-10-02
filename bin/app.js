var express = require('express');
var d3 = require('./d3.min.js');
var app = express();

app.get('/', function (req, res) {
	//res.send('Hello World!');
	res.send(index_10.html);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
