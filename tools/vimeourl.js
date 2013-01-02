var Browser = require("zombie");
var http = require('http');

Browser.visit("http://player.vimeo.com/video/43542510", {
	userAgent : 'Mozilla/5.0',
	debug : false
}, function(e, browser, status) {
	var player = browser.document.getElementsByClassName("f")[0].getAttribute("id");
	var clip = player.replace("player_", "clip");
	player = browser.evaluate(clip);
	var time = player.config.request.timestamp;
	var sig = player.config.request.signature;
	var clip_id = browser.window.location.href.substring(17);
	var path = "/play_redirect" + "?clip_id=" + clip_id + "&sig=" + sig + "&time=" + time;
	console.log(path);
	var options = {
		host : 'player.vimeo.com',
		port : 80,
		path : path,
		headers : {
			'User-Agent' : 'Mozilla/5.0'
		}
	};
	http.request(options, function(res) {
		console.log(res.headers.location);
	}).end();
});

