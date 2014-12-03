(function(){
	'use strict';

	// Menu Mobile
	var menu_active = false;

	$('.Header-iconMobile').on('click', menuMobile);

	var $body = document.querySelector('.wrapers');
	var body = new Hammer($body);

	body.on('panright', function(){
		$('.moveLeft').removeClass('active');
		$('.MainMenu').removeClass('active');
	});

	function menuMobile(){
		if(!menu_active){
			$('.moveLeft').addClass('active');
			$('.MainMenu').addClass('active');
			menu_active = true;
		}else{
			$('.moveLeft').removeClass('active');
			$('.MainMenu').removeClass('active');
			menu_active = false;
		}
	}

	// Menu se detiene
		var altura = $('.Header').offset().top;

		$(window).scroll(function(){
			if($(window).scrollTop() >= altura){
				$('.Header').css('position','fixed');
			}else{
				$('.Header').css('position','relative');
			}
		});




})();
