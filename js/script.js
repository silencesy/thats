$(function(){
	// 消除移动端300ms的click延迟
	window.addEventListener( "load", function() {
		FastClick.attach( document.body );
	}, false );
	// 头部下拉菜单js
	$('#search-module-list li a').on('click',function(){
		$('#navsearchmodule').text($(this).text());
	});
});