/*
 * GET home page.
 */

var mongo = require('mongoskin');
var db = mongo.db("mongodb://dbserver/fustibal")
db.bind('apps')
exports.index = function(req, res) {
	db.apps.find({}).toArray(function(err, data) {
		res.render('index', {
			title : 'fustibal - Montpellier Territoire Numérique',
			apps : data
		});
	});
};
 
