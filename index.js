var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routs/index');
var tasks = require('./routs/tasks');

var port = 3003;

var app = express();

//View engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
	console.log('Server started on port:' +port);
});