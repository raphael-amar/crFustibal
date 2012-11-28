define([], function() {
	$('#container').isotope({
		// options
		itemSelector : '.item',
		mansory : {
			columnWidth : 280
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
	$('.item').click(function() {
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
		$('#container').animate({
			top : 0
		});
	})
	$("#sortnews").click(function() {
		$('#container').isotope({
			filter : '.news'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#sortextern").click(function() {
		$('#container').isotope({
			filter : '.extern'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#sortvideo").click(function() {
		$('#container').isotope({
			filter : '.video'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#sortbadge").click(function() {
		$('#container').isotope({
			filter : '.badge'
		});
		$('#container').animate({
			top : 0
		});
	});
});
