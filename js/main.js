


/*

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
}

*/



/**
* DOCUMENT READY
**/
$(document).ready(function($){

'use strict';	
	
	
	// Mobile Nav
	$('.hamburger').on('click', function(){
		$(this).toggleClass('open');
		$('.logo a').toggleClass('open');
	});
	
	// Open / Close Mobile Nav
	$('.hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-clicked'); 
		$('.header').toggleClass('menu-is-open');
		
		if( $('.navContainer').hasClass('is-visible') ) {
			$('.navContainer').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.navContainer').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
  
  
	
	// Cursor, follower
	let
	cursor = $(".cursor"),
	follower = $(".follower"),
	cWidth = 8, 
	fWidth = 48, 
	delay = 10, 
	mouseX = 0, 
	mouseY = 0, 
	posX = 0, 
	posY = 0;

	TweenMax.to({}, .001, {
		repeat: -1,
		onRepeat: function() {
			posX += (mouseX - posX) / delay;
			posY += (mouseY - posY) / delay;

			TweenMax.set(follower, {
					css: {    
						left: posX - (fWidth / 2),
						top: posY - (fWidth / 2)
					}
			});

			TweenMax.set(cursor, {
					css: {    
						left: mouseX - (cWidth / 2),
						top: mouseY - (cWidth / 2)
					}
			});
		}
	});

	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});

	$("a, .hamburger, .button").on({
		"mouseenter": function() {
			cursor.addClass("is-active");
			follower.addClass("is-active");
		},
		"mouseleave": function() {
			cursor.removeClass("is-active");
			follower.removeClass("is-active");
		}
	});
	
	
	
	// Button hover
	document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
	
	
	
	// AOS
	AOS.init({
		duration: 500,
    easing: 'ease-out-quart',
    once: true
	});
	
	
  
});


