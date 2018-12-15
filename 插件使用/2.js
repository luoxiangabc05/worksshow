$('.link').attr('href',$.cookie('skin'));
console.log($.cookie('skin'));
if($.cookie('skin')=='2.css'){
	$('.blue').find('span').css({
		background:'url(psd/img/39.png) no-repeat -8px -102px',
	});
	$('.orange').find('span').css({
		background:'url(psd/img/39.png) no-repeat 8px 102px',
	});
}else if($.cookie('skin')=='1.css'){
	console.log(1);
	$('.blue').find('span').css({
		background:'url(psd/img/39.png) no-repeat 8px 102px',
	});
	$('.orange').find('span').css({
		background:'url(psd/img/39.png) no-repeat -8px -102px',
	});
}
$('.blue').click(function(){
	$('.orange').attr('id','');
	$(this).attr('id','g');
	$('.link').attr('href','2.css');
	var link=$('.link').attr('href');
	$.cookie('skin',link);
	$('.orange').find('span').css({
		background:'url(psd/img/39.png) no-repeat 8px 102px',
	});
	$(this).find('span').css({
		background:'url(psd/img/39.png) no-repeat -8px -102px',
	});
});
$('.orange').click(function(){
	$('.blue').attr('id','');
	$(this).attr('id','g');
	$('.link').attr('href','1.css');
	var link=$('.link').attr('href');
	$.cookie('skin',link);
	$('.blue').find('span').css({
		background:'url(psd/img/39.png) no-repeat 8px 02px',
	});
	$(this).find('span').css({
		background:'url(psd/img/39.png) no-repeat -8px -102px',
	});
});
