const responsive={
	0:{
		items:1
	},
	560:{
		items:2
	},
	980:{
		items: 3
	}
}
$(document).ready(function(){
	$nav = $('.mna-nav');
	$toggleCollapse = $('.toggle-collaps');

	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse');
		
	})

	//Blog Carousel 
	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		responsive:responsive,
		navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
	});

	//Click to scrol up
	$('.move-up span').click(function(){
		$('html, body').animate({
			scrollTop : 0
		}, 2000);
	});
	//AOS Animation Actions
	AOS.init();
});