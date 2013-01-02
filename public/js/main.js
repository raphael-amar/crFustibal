requirejs.config({
	paths : {
		'jquery-ui' : 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min',
		'froog' : 'http://a.vimeocdn.com/js/froogaloop2.min',
	}
});
require(["jquery", "jquery-ui", "lib/jquery.isotope", 'froog', "lib/jquery.flot"], function($) {
	$(function() {

		require(["ui"]);
		require(["help"]);
		require(["news"]);
		require(["vimeo"]);
		require(["badge"], function(badge) {
			badge.init();
		});
		$('.item').show();
		try {
			clicky.init(100559275);
		} catch(e) {
		}
	});
});
