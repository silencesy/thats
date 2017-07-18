$(function(){
	// 消除移动端300ms的click延迟
		window.addEventListener( "load", function() {
			FastClick.attach( document.body );
		}, false );
	});