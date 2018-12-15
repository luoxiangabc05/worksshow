// 省中心移入拉开部分jquery
$('.location').mouseover(function(){
	$('.location_wrap_box').slideDown(600);
});
$('.location_wrap_box').mouseleave(function(){
	$('.location_wrap_box').slideUp(600);
});

// 搜索框点击部分
$('.search_left').click(function(){
	$('.gjzyw_wrap').slideDown(600).toggle();
});
$('.gjzyw_wrap1').click(function(){
	$('.gjzyw').html($(this).html());
});
$('.gjzyw_wrap2').click(function(){
	$('.gjzyw').html($(this).html());
})

//搜索框焦点
$('.search_ipt').focus(function(){
	$('.search_ipt').attr('placeholder','');
});
$('.search_ipt').blur(function(){
	$('.search_ipt').attr('placeholder','请输入搜索关键字');
});

//市 县 切换部分
$('.notice_left_bottom1_top_city').mouseover(function(){
	$('.notice_left_bottom1_top_county').attr('id','');
	$(this).attr('id','shi');
	$('.notice_left_bottom1_top_county').css('background','');
	$('.notice_right_middle_content_box_box_h').css('margin-left','0px');

})
$('.notice_left_bottom1_top_county').mouseover(function(){
	$('.notice_left_bottom1_top_city').attr('id','');
	$(this).attr('id','shi');
	$('.notice_left_bottom1_top_city').css('background','');
	$('.notice_right_middle_content_box_box_h').css('margin-left','-214px');
})

//应用栏移入部分

$('.use_tjyy').mouseover(function(){
	$('.use_tjyy').css({
		background:'#fff',
		borderBottom:'1px solid transparent',
	});
	$('.use_mfyy').css({
		background:'',
		borderTop:'',
		borderBottom:'',
	});
	$('.use_sfyy').css({
		background:'',
		borderTop:'',
		borderBottom:'',
	});
	$('.use_top div').attr('id','');
	$(this).attr('id','use_top_div');
	$('.use_skewing1').css('display','block');
	$('.use_skewing2').css('display','none');
	$('.use_skewing3').css('display','none');
});
$('.use_mfyy').mouseover(function(){
	$('.use_tjyy').attr('class','use_tjyy')
	$('.use_mfyy').css({
		background:'#fff',
		borderBottom:'1px solid transparent',
	});
	$('.use_tjyy').css({
		background:'',
		borderTop:'',
		borderBottom:'',
	});
	$('.use_sfyy').css({
		background:'',
		borderTop:'',
		borderBottom:'',
	});
	$('.use_top div').attr('id','');
	$(this).attr('id','use_top_div');
	$('.use_skewing1').css('display','none');
	$('.use_skewing2').css('display','block');
	$('.use_skewing3').css('display','none');
});
$('.use_sfyy').mouseover(function(){
	$('.use_tjyy').attr('class','use_tjyy');
	$('.use_sfyy').css({
		background:'#fff',
		borderBottom:'1px solid transparent',
	});
	$('.use_tjyy').css({
		background:'',
		borderTop:'',
		borderBottom:'',
	});
	$('.use_mfyy').css({
		background:'',
		borderTop:'',
		borderBottom:'',
	});
	$('.use_top div').attr('id','');
	$(this).attr('id','use_top_div');
	$('.use_skewing1').css('display','none');
	$('.use_skewing2').css('display','none');
	$('.use_skewing3').css('display','block');
});

// 应用栏点击部分
	var x=0;
	var num=0;
$('.use_box_right').click(function(){
	if(num<6){
		x-=98;
		num++;
		$('.use_skewing1').animate({
			marginLeft:x+'px',
		},300);
	}
});
$('.use_box_left').click(function(){
	if(num!==0){
		x+=98;
		num--;
		$('.use_skewing1').animate({
			marginLeft:x+'px',
		},300);
	}
});
$('.use_box_right').click(function(){
	if(num<6){
		x-=98;
		num++;
		$('.use_skewing2').animate({
			marginLeft:x+'px',
		},300);
	}
});
$('.use_box_left').click(function(){
	if(num!==0){
		x+=98;
		num--;
		$('.use_skewing2').animate({
			marginLeft:x+'px',
		},300);
	}
});


//用户排行栏移入效果

$('.leftbox_three_top_a1').mouseover(function(){
	$('.leftbox_three_top_a1').attr('id','leftbox_three_top_a');
	$('.leftbox_three_top_a2').attr('id','');
	$('.leftbox_three_content_box_h').css('margin-left','');
});
$('.leftbox_three_top_a2').mouseover(function(){
	$('.leftbox_three_top_a2').attr('id','leftbox_three_top_a');
	$('.leftbox_three_top_a1').attr('id','');
	$('.leftbox_three_content_box_h').css('margin-left','-210px');
});

// 课本介绍栏移入

$('.book_topa1').mouseover(function(){
	$('.book_topa1').attr('id','book_top_a');
	$('.book_topa2').attr('id','');
	$('.book_topa3').attr('id','');
	$('.book_content_1').attr('id','book_content_wrap');
	$('.book_content_2').attr('id','');
	$('.book_content_3').attr('id','');
});
$('.book_topa2').mouseover(function(){
	$('.book_topa2').attr('id','book_top_a');
	$('.book_topa1').attr('id','');
	$('.book_topa3').attr('id','');
	$('.book_content_2').attr('id','book_content_wrap');
	$('.book_content_1').attr('id','');
	$('.book_content_3').attr('id','');
});
$('.book_topa3').mouseover(function(){
	$('.book_topa3').attr('id','book_top_a');
	$('.book_topa2').attr('id','');
	$('.book_topa1').attr('id','');
	$('.book_content_3').attr('id','book_content_wrap');
	$('.book_content_2').attr('id','');
	$('.book_content_1').attr('id','');
});

// 课堂栏
$('.classroom_a1').mouseover(function(){
	$('.classroom_a1').attr('id','classroom_abg');
	$('.classroom_a2').attr('id','');
	$('.classroom_a3').attr('id','');
	$('.classroom_content1').attr('id','classroom_content_b');
	$('.classroom_content2').attr('id','');
	$('.classroom_content3').attr('id','');
});
$('.classroom_a2').mouseover(function(){
	$('.classroom_a1').attr('id','');
	$('.classroom_a2').attr('id','classroom_abg');
	$('.classroom_a3').attr('id','');
	$('.classroom_content1').attr('id','');
	$('.classroom_content2').attr('id','classroom_content_b');
	$('.classroom_content3').attr('id','');
});
$('.classroom_a3').mouseover(function(){
	$('.classroom_a1').attr('id','');
	$('.classroom_a2').attr('id','');
	$('.classroom_a3').attr('id','classroom_abg');
	$('.classroom_content1').attr('id','');
	$('.classroom_content2').attr('id','');
	$('.classroom_content3').attr('id','classroom_content_b');
});

