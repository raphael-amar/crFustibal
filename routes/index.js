/*
 * GET home page.
 */

var mongo = require('mongoskin');
var db = mongo.db("mongodb://dbserver/fustibal", {
	safe : false
})

var async = require('async');

db.bind('apps');
db.bind('layout');

exports.index = function(req, res) {
	if (req.params.layout!="default") {
		db.layout.findOne({
			name : req.params.layout
		}, function(err, data) {
			data.modulelist = [];
			async.forEach(data.modules, function(aMod, done) {
				db.apps.findOne({
					_id : new db.apps.ObjectID(aMod)
				}, function(err, app) {
					data.modulelist.push(app);
					done();
				})
			}, function(err) {
				res.render('index', {
					title : 'fustibal - Montpellier Territoire Numérique',
					apps : data.modulelist
				});
			});
		});
	} else {
		db.apps.find({}).toArray(function(err, data) {
			if (req.query.place == 'ot')
				data[6].url = 'http://boussole.mandarine34.fr/?tuio=true&noLinks=true&location=ot_mtp';
			res.render('index', {
				title : 'fustibal - Montpellier Territoire Numérique',
				apps : data
			});
		});
	}
};

exports.getimg = function(req, res, next) {
	db.gridfs().open(req.params.name, 'r', function(err, gs) {
		gs.read(function(err, reply) {
			if (err)
				next(err);
			else {
				res.writeHead('200', {
					'Content-Type' : 'image/png',
					'Cache-Control' : 'public, max-age= 3600'
				});
				res.end(reply, 'image/png');
			}
		});
	});
};

