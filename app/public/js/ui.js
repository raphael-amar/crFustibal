define([], function() {
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
