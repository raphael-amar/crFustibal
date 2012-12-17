/*
 * GET home page.
 */

var mongo = require('mongoskin');
var db = mongo.db("mongodb://127.0.0.1/fustibal", {
	safe : false
})
db.bind('apps');
exports.index = function(req, res) {
	
	db.apps.find({}).toArray(function(err, data) {
		if(req.query.place=='ot')
			data[3].url='http://boussole.mandarine34.fr/?tuio=true&noLinks=true&location=ot_mtp';
		res.render('index', {
			title : 'fustibal - Montpellier Territoire Numérique',
			apps : data
		});
	});
};
