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
	function scrollFeed() {
		var entries = $('.entry');
		var entry = entries[Math.floor(Math.random() * entries.length)];
		$(entry).parent().animate({
			top: 64-$(entry).position().top
		},10000);
		setTimeout(scrollFeed, 20000);
	}
	setTimeout(scrollFeed, 10000);
});
