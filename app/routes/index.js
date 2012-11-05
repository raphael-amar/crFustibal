/*
 * GET home page.
 */

var data = {
	"apps" : [{
		"title" : "Zooomez",
		"headline" : "Le projet ZooomeZ a été initié en 2009 par trois passionnés d’image, de technologie et d’Internet. Son objectif est de valoriser des sites présentant un intérêt patrimonial à travers des médias diversifiés et qualitatifs.",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "extern",
		"logo" : "img/ext_zoomez.png"
	}, {
		"title" : "Boussole",
		"headline" : "Boussole, l'appli qui va aider les montpelliérains pour commencer à se déplacer sans voiture !",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "extern",
		"logo" : "img/ext_boussole.png"
	}, {
		"title" : "Clameur",
		"headline" : "Clameurs est un nouveau média permettant d’associer un message audio à un lieu.",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "extern",
		"logo" : "img/ext_clameur.png"
	}, {
		"title" : "Météo",
		"headline" : "Exploration des animaux du Zoo du Lunaret",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "badge",
		"logo" : "img/bdg_meteo.png"
	}, {
		"title" : "Zoo",
		"headline" : "Exploration des animaux du Zoo du Lunaret",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "extern",
		"logo" : "img/ext_zoo.png"
	}, {
		"title" : "MTN Blog",
		"headline" : "Ce programme a comme ambition d’affirmer la ville comme une collectivité engagée dans l’innovation sociale, en tirant parti de la puissance du numérique et en s’appuyant sur de nouvelles formes de co-production (ascendante, participative).",
		"url" : "http://montpellier.territoirenumerique.org/feed/",
		"type" : "news"
	}, {
		"title" : "Fugue / Trampoline > Cie Yoann Bourgeois",
		"headline" : "Ce fut le grand succès de la 2ème ZAT - Zone Artistique Temporaire, en avril 2011 à Montpellier, et sans doute un des plus beaux spectacles de l'année : Fugue / Trampoline, de Yoann Bourgeois. Une petite danse spectaculaire de 4'30.",
		"type" : "video",
		"vimeo" : "25168181"
	}, {
		"title" : "Production éléctrique de la mairie",
		"headline" : "Suivi temps réel de la production des panneaux solaires de la mairie",
		"url" : "/rrCintamani/parquartier.html",
		"type" : "badge",
		"logo" : "img/bdg_kwh.png"
	}, {
		"title" : "OpenData Blog",
		"headline" : "Le partage et la réutilisation des données publiques conditionnent l’émergence d’une telle dynamique d’innovation dans les services aux citoyens et aux entreprises.",
		"url" : "http://opendata.montpelliernumerique.fr/?page=rss&type=blog",
		"type" : "news"
	}, {
		"title" : "Les Clés d'Antigone",
		"headline" : "Webdocumentaire réalisé pour les 30 ans du quartier Antigone",
		"type" : "video",
		"vimeo" : "21195363"
	}, {
		"title" : "Espace de travail collaboratif Montpellierain",
		"headline" : "L’EspaceCo Montpellier est une initiative portée par La Ville de Montpellier et des acteurs engagés dans l’innovation sociale et numérique. Hébergé par Kawenga, il est animé par un équipe multi-disciplinaire : Designers (DavidONet), Associations (CartoClic), Indépendants (Marie-Laure VIE…), Etudiants (Gilles MARC..) et Chercheurs (LIRMM).",
		"url" : "http://www.espaceco-montpellier.fr/feed/",
		"type" : "news"
	}]
};
exports.index = function(req, res) {
	res.render('index', {
		title : 'fustibal - Montpellier Territoire Numérique',
		apps : data.apps
	});
};
