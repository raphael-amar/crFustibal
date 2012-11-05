requirejs.config({
	paths : {
		'jquery-ui' : 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min',
	}
});
require(["jquery", "jquery-ui", "lib/jquery.isotope"], function($) {
	$(function() {

		require(["rsscontent"], function(rss) {
			$('.feedContent').each(function(index, frame) {
				// Iterate on the feeds to fill with items
				rss.getRssFeed($(this), $(this).attr('name'));
			}).draggable({
				axis : "y",
			});
		});

		$('img.vimeo').each(function() {
			var imgElt = $(this);
			$.getJSON("http://vimeo.com/api/v2/video/" + imgElt.attr('vimeo') + ".json?callback=?", function(data) {
				imgElt.attr('src', data[0].thumbnail_large);
			});
		});

		$('#container').isotope({
			// options
			itemSelector : '.item',
			masonry : {
			}
		}).draggable({
			axis : "y",
		});
		$('.item').dblclick(function() {
			if ($(this).hasClass('activate')) {
				$(this).switchClass("activate", "", 500, function() {
					$('#container').isotope('reLayout');
				});
				$(this).css({
					"z-index" : 0
				});

			} else {
				$(this).css({
					"z-index" : 100
				});

				$(this).switchClass("", "activate", 500, function() {
					$('#container').isotope('reLayout');
				});
			}
			$(this).children('.details').toggle(500);

		});
		$('#collapse').click(function() {
			var nbi = $('.item').length
			$('.item').switchClass("activate", "", 500, function() {
				nbi--;
				if (nbi === 0)
					$('#container').isotope('reLayout');

			}).css({
				"z-index" : 0
			});
			$('.details').fadeOut();
		});
	});
});
