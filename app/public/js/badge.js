define(["lib/jquery.flot.navigate", "lib/jQueryRotate.min", 'lib/jgauge'], function() {
	function updateAirLRData() {
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
		setTimeout(updateAirLRData, 4 * 60 * 60 * 1000);
	}

	function initHDVPV() {

		$(document.createElement("div")).addClass('jgauge').attr("id", "gaugeRay").appendTo($('#hdpv'));
		var gaugeRay = new jGauge();
		gaugeRay.id = 'gaugeRay';
		gaugeRay.label.suffix = 'W / m2';
		gaugeRay.ticks.start = 0;
		gaugeRay.ticks.end = 500;
		gaugeRay.range.thickness = 0;
		gaugeRay.range.radius = 0;
		gaugeRay.init();

		$(document.createElement("div")).addClass('jgauge').attr("id", "gaugeTemp").appendTo($('#hdpv'));
		var gaugeTemp = new jGauge();
		gaugeTemp.id = 'gaugeTemp';
		gaugeTemp.label.suffix = 'W';
		gaugeTemp.ticks.start = 0;
		gaugeTemp.ticks.end = 80000;
		gaugeTemp.range.thickness = 0;
		gaugeTemp.range.radius = 0;
		gaugeTemp.init();

		$(document.createElement("div")).addClass('jgauge').attr("id", "gaugeDay").appendTo($('#hdpv'));
		var gaugeDay = new jGauge();
		gaugeDay.id = 'gaugeDay';
		gaugeDay.label.suffix = 'W / j';
		gaugeDay.ticks.start = 0;
		gaugeDay.ticks.end = 500000;
		gaugeDay.range.thickness = 0;
		gaugeDay.range.radius = 0;
		gaugeDay.init();

		updateHDVPVData();
		function updateHDVPVData() {
			$.ajax({
				url : 'http://hdv.bype.org/hdpv.json',
				dataType : 'json',
				success : function(data) {
					gaugeTemp.setValue(data.PAC);
					gaugeRay.setValue(data.RAY);
					gaugeDay.setValue(data.DAY_ENERGY);
					setTimeout(updateHDVPVData, 10000);
				},
				error : function(){
					setTimeout(updateHDVPVData, 2000);
				}
			});

		}

	}

	return {
		init : function() {
			initHDVPV();
			updateAirLRData();
		}
	};
});
