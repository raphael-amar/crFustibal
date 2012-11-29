define([], function() {
	$('video.vimeo').each(function() {
		var imgElt = this;
		imgElt.load();
		if ($(this).attr('vimeo') != "undefined")
			$.getJSON("http://vimeo.com/api/v2/video/" + $(this).attr('vimeo') + ".json?callback=?", function(data) {
				$(imgElt).attr('poster', data[0].thumbnail_large);
			});
		$(imgElt).parent().dblclick(function() {
			if (imgElt.paused) {
				$('video.vimeo').each(function() {
					this.pause();
					$(this).parent().find('svg.icon').fadeIn(1000);
				});
				$(this).find('svg.icon').fadeOut(2000);
				imgElt.play();
			} else {
				$(this).find('svg.icon').fadeIn(1000);
				imgElt.pause();
				imgElt.load();
			}
		});
	});
});
