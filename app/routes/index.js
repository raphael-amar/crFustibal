/*
 * GET home page.
 */

var data = {
	"apps" : [{
		"title" : "Zooomez",
		"headline" : "L'objectif de ZooomeZ est de valoriser des sites présentant un intérêt patrimonial à travers des médias diversifiés et qualitatifs.",
		"url" : "http://zooomez.fr/carte/mairie",
		"type" : "extern",
		"logo" : "img/ext_zoomez.png"
	}, {
		"title" : "MTN Blog",
		"headline" : "La ville comme une collectivité engagée dans l’innovation sociale.",
		"rss" : "http://montpellier.territoirenumerique.org/feed/",
		"type" : "news"
	}, {
		"title" : "Air LR",
		"headline" : "Indice de la qualité de l'air à Montpellier",
		"type" : "badge",
		"id" : "airlr"
	}, {
		"title" : "Centrale Photovoltaïque de l'Hotel de Ville",
		"headline" : "Rayonnement solaire, production instantanée et journalière",
		"type" : "badge",
		"id" : "hdpv"
	}, {
		"title" : "OpenData Blog",
		"headline" : "Le partage et la réutilisation des données publiques.",
		"rss" : "http://opendata.montpelliernumerique.fr/?page=rss&type=blog",
		"type" : "news"
	}, {
		"title" : "Les Clés d'Antigone",
		"headline" : "Webdocumentaire réalisé pour les 30 ans du quartier Antigone",
		"type" : "video",
		"vimeo" : "21195363"
	}, {
		"title" : "Boussole",
		"headline" : "Boussole, l'appli qui va aider les montpelliérains pour commencer à se déplacer sans voiture !",
		"url" : "http://boussole.mandarine34.fr/?tuio=true&noLinks=true&location=hotel_de_ville_mtp",
		"type" : "extern",
		"logo" : "img/ext_boussole.png"
	}, {
		"title" : "Clameur",
		"headline" : "Clameurs est un nouveau média permettant d’associer un message audio à un lieu.",
		"url" : "http://map.clameurs.fr/mairie",
		"type" : "extern",
		"logo" : "img/ext_clameur.png"
	}, {
		"title" : "Zoo",
		"headline" : "Exploration des animaux du Zoo du Lunaret",
		"url" : "http://sandbox.palmsnipe.cat/enyo2/zoo/ville/",
		"type" : "extern",
		"logo" : "img/ext_zoo.png"
	}, {
		"title" : "Fugue / Trampoline > Cie Yoann Bourgeois",
		"headline" : "Ce fut le grand succès de la 2ème ZAT - Zone Artistique Temporaire, en avril 2011 à Montpellier, et sans doute un des plus beaux spectacles de l'année : Fugue / Trampoline, de Yoann Bourgeois. Une petite danse spectaculaire de 4'30.",
		"type" : "video",
		"vimeo" : "25168181"
	}]
};
exports.index = function(req, res) {
	res.render('index', {
		title : 'fustibal - Montpellier Territoire Numérique',
		apps : data.apps
	});
};
