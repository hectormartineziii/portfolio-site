var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('sampledb.db');

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
app.get('/portfolio', function(req,res){res.render('../portfolio/index',{})});
app.get('/portfolio/1', function(req,res){res.render('../portfolio/1/index',{})});
app.get('/portfolio/2', function(req,res){res.render('../portfolio/2/index',{})});
app.get('/portfolio/3', function(req,res){res.render('../portfolio/3/index',{})});
app.get('/portfolio/4', function(req,res){res.render('../portfolio/4/index',{})});
app.get('/portfolio/5', function(req,res){res.render('../portfolio/5/index',{})});
app.get('/portfolio/6', function(req,res){
	db.all("SELECT * FROM Contacts", function(err, rows){
		res.render('../portfolio/6/index',{
			pagename: 'list of Contacts, a sql primer',
			contacts: rows
		})
	})
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/portfolio', express.static(path.join(__dirname,'public')));
app.use('/portfolio/1', express.static(path.join(__dirname,'public')));
app.use('/portfolio/2', express.static(path.join(__dirname,'public')));
app.use('/portfolio/3', express.static(path.join(__dirname,'public')));
app.use('/portfolio/4', express.static(path.join(__dirname,'public')));
app.use('/portfolio/5', express.static(path.join(__dirname,'public')));
app.use('/portfolio/6', express.static(path.join(__dirname,'public')));

app.listen(port, function(){
	console.log("starting server at port: " + port)
});
