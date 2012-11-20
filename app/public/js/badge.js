define(["lib/jquery.flot.threshold"], function() {
	$.getJSON('data/airlr.json', function(data) {

		var last = new Date();
		last.setDate(last.getDate() - 20);
		$.plot($('#airlr'), [{
			data : data.data,
			color : "rgb(72,120,168)",
			bars : {
				show : true,
				barWidth : 20 * 60 * 60 * 1000,
				align : "center",
				lineWidth : 0,
			}
		}], {
			xaxis : {
				mode : "time",
				timeformat : "%d %b",
				minTickSize : [1, "day"],
				min : last
			}
		});
	});

});
