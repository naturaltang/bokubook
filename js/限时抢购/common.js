window.addEventListener('load',function(){
	
//	$(".last-minute li div").mouseenter(function(){
//		$(this).addClass('current3');
//		$(this).children('.delta-xu').addClass('delta');
//	})
//	$(".last-minute li div").mouseleave(function(){
//		$(this).removeClass('current3');
//		$(this).children('.delta-xu').removeClass('delta');
//	})
//	
	
	
	$('.last-minute li').click(function(){
		var index=$(this).index();
		$(this).children().css({
			backgroundColor:'#f28f97',
			color:'white'
		});
		$(this).find('.delta').show();
		$(this).siblings().children().css({
			backgroundColor:'#fff',
			color:'#333'
		});
		$(this).siblings().find('.delta').hide();
		
		$(".bottom-limited .last-minute1").eq(index).show().siblings().hide();
	})
})