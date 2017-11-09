var path = require('path');
var express = require('express');
var swig = require('swig');

var app = express();
var port = process.env.PORT || 3000;

swig.setDefaults({
	cache: false
})

// set views path, template engine and default layout
app.engine('html', swig.renderFile);
app.set('views', 'public');
app.set('view engine', 'html');

app.get('/', function(req,res){res.render('index',{})});
app.get('/blog', function(req,res){res.render('../blog/index',{})});
app.get('/blog/1', function(req,res){res.render('../blog/1/index',{})});
app.get('/blog/2', function(req,res){res.render('../blog/2/index',{})});
app.get('/blog/3', function(req,res){res.render('../blog/3/index',{})});
app.get('/blog/4', function(req,res){res.render('../blog/4/index',{})});
app.get('/blog/5', function(req,res){res.render('../blog/5/index',{})});


app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/blog', express.static(path.join(__dirname,'public')));
app.use('/blog/1', express.static(path.join(__dirname,'public')));
app.use('/blog/2', express.static(path.join(__dirname,'public')));
app.use('/blog/3', express.static(path.join(__dirname,'public')));
app.use('/blog/4', express.static(path.join(__dirname,'public')));
app.use('/blog/5', express.static(path.join(__dirname,'public')));

app.listen(port, function(){
	console.log("starting server at port: " + port)
});