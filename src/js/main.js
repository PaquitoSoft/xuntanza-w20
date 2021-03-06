(function ($) {
	"use strict";
	
	//meanmenu
	if($.fn.meanmenu){
		$('.mobile-menu').meanmenu({
			meanScreenWidth: 767
		});
	}
	
	//countdown
	$('.countdown-timer').countdown('2020/03/13 22:00:00', function (event) {
		$(this).html(event.strftime('<ul><li>%D<span>Días</span></li><li>%H<span>Horas</span></li><li>%M<span>Mins</span></li><li>%S<span>Secs</span></li><ul>'));
	});

	//owl carousel
	// if($.fn.owlCarousel) {
	// 	//banner slider
	// 	$(".banner-slider").owlCarousel({
	// 		items: 1,
	// 		dots: true,
	// 		animateOut: 'slideOutDown',
	// 		animateIn: 'zoomIn',
	// 		autoplay: false,
	// 		loop: true,
	// 		autoplaySpeed: true,
	// 		smartSpeed: 250
	// 	});
	// 	//hm2-speaker-slider
	// 	$(".speaker-slider-hm2").owlCarousel({
	// 		items: 3,
	// 		margin: 30,
	// 		nav: true,
	// 		navText: [
	// 		  "<i class='icofont icofont-thin-left '></i>",
	// 		  "<i class='icofont icofont-thin-right '></i>"
	// 		  ],
	// 		responsive: {
    //             300: {
    //                 items: 1
    //             },
    //             480: {
    //                 items: 1
    //             },
    //             768: {
    //                 items: 3
    //             },
    //             1024: {
    //                 items: 3
    //             }
    //         }
	// 	});
	// 	//hm2-speaker-slider
	// 	$(".up-event-slider").owlCarousel({
	// 		items: 3,
	// 		margin: 30,
	// 		nav: true,
	// 		navText: [
	// 		  "<i class='icofont icofont-thin-left '></i>",
	// 		  "<i class='icofont icofont-thin-right '></i>"
	// 		  ],
	// 		responsive: {
    //             300: {
    //                 items: 1
    //             },
    //             480: {
    //                 items: 1
    //             },
    //             768: {
    //                 items: 3
    //             },
    //             1024: {
    //                 items: 3
    //             }
    //         }
	// 	});
		
	// 	//team img
	// 	var team_slid = $('.speaker-slider');
	// 	team_slid.owlCarousel({
	// 		items: 1,
	// 		loop: true,
	// 		animateIn: 'fadeInLeft',
	// 		animateOut: 'fadeOutRight',
	// 		nav: true,
	// 		navText: [
	// 		  "<i class='icofont icofont-thin-left '></i>",
	// 		  "<i class='icofont icofont-thin-right '></i>"
	// 		]
	// 	});
		
	// 	//hm2-testm-slider
	// 	$(".testimonial-slider").owlCarousel({
	// 		items: 1,
	// 		margin: 30,
	// 		nav: true,
	// 		navText: [
	// 		  "<i class='icofont icofont-thin-left '></i>",
	// 		  "<i class='icofont icofont-thin-right '></i>"
	// 		  ]
	// 	});
		
	// 	//team content
	// 	var team_slid2 = $('.speaker-info-slider');
	// 	team_slid2.owlCarousel({
	// 		items: 1,
	// 		animateIn: 'fadeInDown',
	// 		animateOut: 'fadeOutDown',
	// 		loop: true
	// 	});
	// }
	
	//home1 speaker double slider 
	// team_slid.on('translate.owl.carousel', function (property) {
	// 	$('.team-content .owl-dot:eq(' + property.page.index + ')').click();
	// });
	// team_slid2.on('translate.owl.carousel', function (property) {
	// 	$('.speaker-slider-container .owl-dot:eq(' + property.page.index + ')').click();
	// });

	//Popup
	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	//sponsor page mixitup
	$('#sponsor-sorting').mixItUp({
		animation: {
             perspectiveDistance: '1000px'
         }
	});
	
	//Initialize wow
	new WOW().init();
	
	//google map
	var googleMapSelector = $('#contactgoogleMap'),
		// myCenter = new google.maps.LatLng(33.8615062,63.2091465);
		myCenter = new google.maps.LatLng(43.370182, -8.399172);

	function initialize() {
		var mapProp = {
			center: myCenter,
			zoom: 16,
			scrollwheel: false
			// mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		var map = new google.maps.Map(document.getElementById("contactgoogleMap"), mapProp);
		var marker = new google.maps.Marker({
			position: myCenter,
			// animation: google.maps.Animation.BOUNCE,
			// icon: 'img/map-marker.png'
		});
		marker.setMap(map);
	}
	if (googleMapSelector.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	
	//window load function
	// $(window).on('load',function () {
	// 	// Hide preloader slowly 
    //     $("#preloader").delay(1000).fadeOut("slow");
	// });

})(jQuery);