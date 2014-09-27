// add first icon
$('.playspace').append('<i class="em em-new_moon"></i>');

// set the initial positions

$('.em-new_moon').css({
  top: 200,
  left: 50
});

$('.em-new_moon').animate({
  left: 100
}, 1000, 'easeInOutSine');

setTimeout(function() {
	$('.playspace').append('<i class="em em-waxing_crescent_moon"></i>');
	$('.em-waxing_crescent_moon').css({
  		top: 200,
  		left: 100
  	});

  	$('.em-waxing_crescent_moon').animate({
  		left: 150
	}, 1000, 'easeInOutSine');

}, 1000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-first_quarter_moon"></i>');
	$('.em-first_quarter_moon').css({
  		top: 200,
  		left: 150
	});

	$('.em-first_quarter_moon').animate({
		left: 200
	}, 1000, 'easeInOutSine');
}, 2000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-waxing_gibbous_moon"></i>');
	$('.em-waxing_gibbous_moon').css({
		top: 200,
		left: 200
	});

	$('.em-waxing_gibbous_moon').animate({
		left: 250
	 }, 1000, 'easeInOutSine');
}, 3000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-full_moon"></i>');
	$('.em-full_moon').css({
		top: 200,
		left: 250
	});

	$('.em-full_moon').animate({
		left: 300
	}, 1000, 'easeInOutSine');
}, 4000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-waning_gibbous_moon"></i>');
	$('.em-waning_gibbous_moon').css({
		top: 200,
		left: 300
	});

	$('.em-waning_gibbous_moon').animate({
		left: 350
	}, 1000, 'easeInOutSine');
}, 5000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-last_quarter_moon"></i>');
	$('.em-last_quarter_moon').css({
		top: 200,
		left: 350
	});

	$('.em-last_quarter_moon').animate({
		left: 400
	}, 1000, 'easeInOutSine');
}, 6000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-waning_crescent_moon"></i>');
	$('.em-waning_crescent_moon').css({
		top: 200,
		left: 400
	});

	$('.em-waning_crescent_moon').animate({
		left: 450
	}, 1000, 'easeInOutSine');
}, 7000);

setTimeout(function() {
	$('.playspace').append('<i class="em em-new_moon_with_face"></i>');
	$('.em-new_moon_with_face').css({
		top: 200,
		left: 450
	});

	$('.em-new_moon_with_face').animate({
		left: 500
	}, 1000, 'easeInOutSine');
}, 8000);



