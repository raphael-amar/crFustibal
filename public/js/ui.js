define([], function() {
	var timeOutFn;
	$('#container').isotope({
		// options
		itemSelector : '.item',
		mansory : {
			columnWidth : 280
		}
	}).draggable({
		axis : "y",
		start : function(event, ui) {
			$.dragMoving = true;
		},
		stop : function(event, ui) {
			if ($(this).height() < $(window).height()) {
				$(this).animate({
					top : 0
				});
			} else {
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
			window.clearTimeout(timeOutFn);
			timeOutFn = setTimeout(function() {
				$.dragMoving = false;
			}, 500);
		}
	});
	$('.item').click(function() {
		if (!$.dragMoving) {
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
		}
	});
	function resetIcon() {
		$('.icon').each(function(index) {
			$($(this).children()[0]).attr({
				fill : "#C4C8C5",
			});
		});
	}


	$('#collapse').click(function() {
		var nbi = $('.item').length
		$('.item').switchClass("activate", "", 500, function() {
			nbi--;
			if (nbi === 0)
				$('#container').isotope('reLayout');

		}).css({
			"z-index" : 0
		});
		$('video.vimeo').each(function() {
			this.pause();
			$(this).parent().find('svg.icon').fadeIn(1000);
		});
		$('#container').isotope({
			filter : ''
		});
		$('#container').animate({
			top : 0
		});
		resetIcon();
	});

	$("#refresh").click(function() {
		$('#container').isotope({
			filter : ''
		});
		$('#container').animate({
			top : 0
		});
		resetIcon();
	})
	$("#sortnews").click(function() {
		resetIcon();
		$($(this).children()[0]).attr({
			fill : "#eee",
		});
		$('#container').isotope({
			filter : '.news'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#sortextern").click(function() {
		resetIcon();
		$($(this).children()[0]).attr({
			fill : "#eee"
		});
		$('#container').isotope({
			filter : '.extern'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#sortvideo").click(function() {
		resetIcon();
		$($(this).children()[0]).attr({
			fill : "#eee"
		});
		$('#container').isotope({
			filter : '.video'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#sortbadge").click(function() {
		resetIcon();
		$($(this).children()[0]).attr({
			fill : "#eee"
		});
		$('#container').isotope({
			filter : '.badge'
		});
		$('#container').animate({
			top : 0
		});
	});
	$("#info,#infobox").click(function() {
		$('#darkscreen').fadeToggle(200, function() {
			$('#infobox').toggle(500);
		});
	});
	$("#help,#helpbox").click(function() {
		$('#darkscreen').fadeToggle(200, function() {
			$('#helpbox').toggle(500);
		});
	});
	$.openExtLink = function(url) {
		if (!$.dragMoving)
			document.location = url;
	}
});
