$(function(){
	
//导航效果
		
	if($(window).width()<992){
		$("header nav ul").hide();
	}
	$("header nav .menu").click(function(){
		$("header nav ul").slideToggle();
	});

//	轮播
	var index = 0;
	setInterval(function(){
		$(".banner div").removeClass("active");
		$(".banner div:eq("+index+")").addClass("active");
		index++;
		if(index >= $(".banner div").length){
			index=0;
		}
	},4000);	
});
