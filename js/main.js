$(function() {
	var carouselList = $('#carousel ul');
	function moveSlideAutoRight() {
		carouselList.animate({'marginLeft':-700}, 500, moveSlideRight);
	}
	function moveSlideDirection() {
		moveSlideLeft();
		carouselList.animate({'marginLeft':0}, 500);
	}
	function moveSlideLeft() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-700});
	}
	// setInterval(moveSlide, 8000);
	function moveSlideRight() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	$('#btnLeft').click(function() {
		moveSlideDirection();
	});
	$('#btnRight').click(function() {
		moveSlideAutoRight();
	});
});