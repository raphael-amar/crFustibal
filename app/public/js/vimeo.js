define([], function() {
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
});
