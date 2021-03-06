define(["rsscontent"], function(rss) {
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

	$('.feedContent').dblclick(function() {

	});

	function scrollFeed() {
		var entries = $('.entry');
		var entry = entries[Math.floor(Math.random() * entries.length)];
		if (!$(entry).parent().parent().hasClass('activate'))
			$(entry).parent().animate({
				top : 64 - $(entry).position().top
			}, 1000);
		setTimeout(scrollFeed, 60000);
	}

	setTimeout(scrollFeed, 10000);
});
