requirejs.config({
	paths : {
		'jquery-ui' : 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min',
		'froog' : 'http://a.vimeocdn.com/js/froogaloop2.min'
	}
});
require(["jquery", "jquery-ui", "lib/jquery.isotope", 'froog'], function($) {
	$(function() {

		require(["rsscontent"], function(rss) {
			$('.feedContent').each(function(index, frame) {
				// Iterate on the feeds to fill with items
				rss.getRssFeed($(this), $(this).attr('name'));
				$(this).animate({
					top : 34
				});
			}).draggable({
				axis : "y",
				stop : function(event, ui) {
					if (34 < ui.position.top) {
						$(this).animate({
							top : 34
						});
					}
					if (ui.position.top < -$(this).height() + 904) {
						$(this).animate({
							top : -$(this).height() + 904
						});
					}

				}
			});
		});

		$('img.vimeo').each(function() {
			var imgElt = $(this);
			$.getJSON("http://vimeo.com/api/v2/video/" + imgElt.attr('vimeo') + ".json?callback=?", function(data) {
				imgElt.attr('src', data[0].thumbnail_large);
			});
			imgElt.parent().dblclick(function() {
				var parElt = $(this).children('iframe');
				if (parElt[0]) {
					parElt.remove();
				} else {
					var vimeoElt = $(document.createElement("iframe")).attr('src', 'http://player.vimeo.com/video/' + imgElt.attr('vimeo') + '?title=0&portrait=0&byline=0&autoplay=1&api=1');
					var player = $f($(vimeoElt)[0]);
					player.addEvent('ready', function() {
						player.addEvent('finish', function() {
							$('iframe').remove();
						});
					});
					$(this).append(vimeoElt);
				}
			});
		});

		$('#container').isotope({
			// options
			itemSelector : '.item',
			masonry : {
			}
		}).draggable({
			axis : "y",
			stop : function(event, ui) {
				if (0 < ui.position.top) {
					$(this).animate({
						top : 0
					});
				}
				if (ui.position.top < -$(this).height() + $(window).height()) {
					$(this).animate({
						top : -$(this).height() + $(window).height()
					});
				}
			}
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
		$("#refresh").click(function() {
			$('#container').isotope({
				filter : ''
			});
		})
		$("#sortnews").click(function() {
			$('#container').isotope({
				filter : '.news'
			});
		});
		$("#sortextern").click(function() {
			$('#container').isotope({
				filter : '.extern'
			});
		});
		$("#sortvideo").click(function() {
			$('#container').isotope({
				filter : '.video'
			});
		});
	});
});
