$(function() {

	//导航效果

	if($(window).width() < 992) {
		$("header nav ul").hide();
	}
	$("header nav .menu").click(function() {
		$("header nav ul").slideToggle();
	});
	$("header nav ul .zhuceaaa").click(function(){
		if($("header nav ul .zhuceaaa p").hasClass("active")){
			$("header nav ul .zhuceaaa p").removeClass("active");
		}else{
			$("header nav ul .zhuceaaa p").addClass("active");
		}
		
	});

	//	轮播
	var index = 0;
	setInterval(function() {
		$(".banner div").removeClass("active");
		$(".banner div:eq(" + index + ")").addClass("active");
		index++;
		if(index >= $(".banner div").length) {
			index = 0;
		}
	}, 4000);

	//	合作商家滚动
	//	li长度
	var lis = $(".consociation .rolllllll ul li").length;
	//	li宽度
	var liwidth = $(".consociation .rolllllll ul li").width();
	//	ul父级宽度
	var rollwidth = $(".consociation .rolllllll").width();
	//	console.log(rollwidth);
	//	每次滚动的长度
	//	var linubs= Math.floor(rollwidth/(liwidth+34)) *(liwidth+34);
	//	console.log(linubs);
	//	li总长度
	var changdu = lis * liwidth + (lis - 1) * 34;
	//	滚动原始数值
	var left = 0;
	//  可滚动最大距离
	var num = Math.floor(changdu / rollwidth) * rollwidth;

	$(".consociation .left").click(function() {
		$(".consociation .right").removeClass("active");
		$(this).addClass("active");
		if(left >= 0) {
			left = 0
		} else {
			left = left + rollwidth;
		}
		$(".consociation .rolllllll ul").css("margin-left", left);
	});

	$(".consociation .right").click(function() {
		$(".consociation .left").removeClass("active");
		$(this).addClass("active");
		if(left <= -num) {
			left = -num;
		} else {
			left = left - rollwidth;
		}
		$(".consociation .rolllllll ul").css("margin-left", left);
	});

	// 	侧边栏
	$("slide .cli").mouseover(function() {
		$(this).find(".tanchu").addClass("active");
	});
	$("slide .cli").mouseout(function() {
		$(this).find(".tanchu").removeClass("active");
	});
	$("slide .erwei").mouseover(function() {
		$(this).find(".erweima").addClass("active");
	});
	$("slide .erwei").mouseout(function() {
		$(this).find(".erweima").removeClass("active");
	});
});