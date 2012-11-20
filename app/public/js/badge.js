define(["lib/jquery.flot.navigate"], function() {
	function updateData() {
		$.getJSON('data/airlr.json', function(data) {
			var last = new Date();
			last.setDate(last.getDate() - 10);
			var end = data.data[data.data.length-1][0];
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
					min : last,
					max : end,
					panRange : [0, end],
				},
				pan : {
					interactive : true
				},
				yaxis : {
					panRange : [0, 11],
					min : 0,
					max : 11,
					ticks : 5
				}
			});
		});
		setTimeout(updateData, 4 * 60 * 60 * 1000);
	}

	updateData();

});
