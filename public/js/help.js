define([], function() {
	$('#next').click(function() {
		$('#helpimg').animate({
			left : "-480px",
			width : "1280px"
		});
		return false;
	});
});
