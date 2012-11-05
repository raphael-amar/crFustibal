/*
 * GET home page.
 */

var data = {
	"apps" : [{
		"title" : "Zooomez",
		"headline" : "Le projet ZooomeZ a été initié en 2009 par trois passionnés d’image, de technologie et d’Internet. Son objectif est de valoriser des sites présentant un intérêt patrimonial à travers des médias diversifiés et qualitatifs.",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "extern",
		"logo":"img/ext_zoomez.png"
	},{
		"title" : "Boussole",
		"headline" : "Boussole, l'appli qui va aider les montpelliérains pour commencer à se déplacer sans voiture !",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "extern",
		"logo":"img/ext_boussole.png"
	}, {
		"title" : "Les Clés d'Antigone",
		"headline" : "Les blogs édités autour de Montpellier.",
		"type" : "video",
		"vimeo" : "21195363"
	}, {
		"title" : "Dans les blogs",
		"headline" : "Sélection gérée par le backoffice",
		"url" : "/rrCintamani/index.html",
		"type" : "news"
	}]
};
exports.index = function(req, res) {
	res.render('index', {
		title : 'Express',
		apps : data.apps
	});
};
