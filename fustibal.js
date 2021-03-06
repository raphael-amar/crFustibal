/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes'), http = require('http'), path = require('path');

var app = express();

app.configure(function() {
	app.set('port', 5040);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(require('less-middleware')({
		src : __dirname + '/public'
	}));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', function(req, res) {
	if (req.query.place == 'ot')
		res.redirect('/otm');
	else
		res.redirect('/default');
});
app.get('/:layout', routes.index);
app.get('/getimg/:name', routes.getimg);
app.get('/getvimeourl/:vimeoid', routes.getVimeoURL);
app.get('/getvimeourlhd/:vimeoid', routes.getVimeoURLHD);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
