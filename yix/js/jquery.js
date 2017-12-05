$(function(){
	var ing = true;
	$(".mobile-inner-header-icon").click(function(){
		if(ing){
			$('.header').css('height','100vh');
			ing = false;
		}else{
			$('.header').css('height','50px');
			ing = true;
		}
		
		
		if($('.mobile-inner-nav').is(":hidden")){
			$('body').css('overflow','hidden');
		}else{
			$('body').css('overflow','auto');
		}
		$('.sp1').toggle();
		$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");	
		$(".mobile-inner-nav").slideToggle(250);
	});
	$(".mobile-inner-nav a").each(function( index ) {
		$(this).css({'animation-delay': (index/10)+'s'});
//		$('.header').css('height','500px');
	});
	$(".mobile-inner-nav > ul > li").click(function(){
		$(this).find('ul').slideToggle();
	})
})
