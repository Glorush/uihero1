$(document).ready(function(){

	// header-spy
	$('body').scrollspy({
	 target: '#nav-class' 
	});

	// menu slide icon
	$('.menu-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	});

	// header-animated
	$('.menu ul li a').click(function(){  
		$('html,body').animate({    
			scrollTop:$($(this).attr('href')).offset().top  
		},1000);
		return false;
	});

	// banner-carousel
	$('.banner-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:1000
	});

	// about-profile-carousel
	$('.about-profile-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:100
	});
	

	$('.video_p').magnificPopup({
  		type: 'iframe'
  	// other options
	});
	$('.photo-popup').magnificPopup({
  		type: 'image',
		  gallery:{
		    enabled:true
		  }
  	// other options
	});

	// single-client-items
	$('.single-client-items').owlCarousel({
		items:5,
		loop:true,
		nav:false,
		margin:40,
		dots:false,
		autoplay:1000,
	    responsive:{
	        0:{
	            items:2
	        },
	        575:{
	            items:3
	        },
	        768:{
	            items:4
	        },
	        992:{
	            items:5
	        }
	    }
	});
	// work-carousel
	$('.work-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
	});

	// twitter-feed-carousel
	$('.twitter-feed-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:1000
	});

	// back-to-top
		$('.back-to-top').click(function(){  
		$('html,body').animate({    
			scrollTop:0 
		},1000);
		return false;
	});

	// aos animage 
		AOS.init();



});

$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();

	// sticky
	if(scrollvalue>150){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
		
	 return false;
	}

	// back-to-top
  	if(scrollvalue>500){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    }

	return false;
});