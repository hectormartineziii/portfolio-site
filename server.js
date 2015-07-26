var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/blog', express.static(path.join(__dirname,'blog')));
app.use('/blog/1', express.static(path.join(__dirname,'blog/1')))
app.use('/blog/2', express.static(path.join(__dirname,'blog/2')))

app.listen(port, function(){
	console.log("starting server at port: " + port)
});