(function(window, document, $, undefined) {
	var $slides, $btnArr;

	function onClick(e) {
		var $target = $(e.target);
		if ($target.hasClass('slide') && !$target.hasClass('active') && !$target.siblings().hasClass('active')) {
			$target.removeClass('anim-in last-viewed').addClass('active')
			$target.siblings().removeClass('anim-in last-viewed').addClass('anim-out');
			$('.gallery-thumbnails').removeClass('fadeOutRight').addClass('animated fadeInRight');
		}

		//show grid gallery
		if ($target.hasClass('nature')) { $('#main-section-nature').css('display', 'block'); }
		if ($target.hasClass('ukraine')) { $('#main-section-ukraine').css('display', 'block'); }
		if ($target.hasClass('europe')) { $('#main-section-europe').css('display', 'block'); }
	}

	function closeSlide(e) {
		var $slide = $(e.target).parent();
		$slide.removeClass('active anim-in').addClass('last-viewed');
		$slide.siblings().removeClass('anim-out').addClass('anim-in');
		$('.gallery-thumbnails').removeClass('fadeInRight').addClass('animated fadeOutRight');

		//hide all grid galleries
		setTimeout(function(){ 
			$('section[id^="main-section"]').css('display', 'none');
		 }, 1500);
	}

	$(function() {
		$slides = $('.slide');
		$btnArr = $slides.find('.btn-close');
		$slides.on('click', onClick);
		$btnArr.on('click', closeSlide);
	});

	//magnific popup gallery
	var groups = {};
	$('.gallery-item').each(function() {
		var id = parseInt($(this).attr('data-group'), 10);		  
		if(!groups[id]) {
			groups[id] = [];
		} 	  
	  	groups[id].push( this );
	});
	$.each(groups, function() {		  
		$(this).magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			gallery: { enabled:true }
		})		  
	});
})(this, document, jQuery);

