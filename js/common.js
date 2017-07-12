$(document).ready(function(){    
    /**
     * top banner menu event
     */
    $("#search-module-list > li").click(function(){
        $(this).parent().parent().find("button > #navsearchmodule").text($(this).text());
        $(this).parent().prev("input[name=type]").val($(this).text());
    });

    $("#search-form .icon-search").click(function(){

        $("#search-form").find("button > input").val($("#search-form").find("button > #navsearchmodule").text());
        $("#search-form").submit();
        
        /*
        if($(this).parent().find("input[name='keywords']").val()){
            $("#search-form").submit();
        }
        */
    });

    $("input[name='keywords']").on('keypress', function(e) {
        $("#search-form").find("button > input").val($("#search-form").find("button > #navsearchmodule").text());
        if(e.keyCode==13){
            if($(this).val()){
                $("#search-form").submit();
                return true;
            }
            return false;
        }else{
            return true;
        }
    });

    $(".ad").click(function(){
        var adid = $(this).data("ad");
        if(adid){
            $.get("/front/adclick",{adid:adid},function(){
                //nothing
            });
        }
    });
    
	$('.share').click(function(){
		var id = $(this).data('id');
		var type = $(this).data('type');
		if (id && type) {
			$.get('/api/share/?id=' + id + '&type=' + type);
		}
	});
	
	$("#globalSubscribeForm").submit(function(){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: '/subscribe/add/',
            data: $('#globalSubscribeForm').serialize(),
            success: function (data) {
                if (data.status == 1) {
                    alert(data.msg);
                    $("#myModal").modal('hide');
                } else {
                    alert(data.msg);
                }
            },
            error: function(data) {
                alert('request error');
            }
        });
        return false;
    });

	$('.image-ajax-popup').magnificPopup({
    	type: 'image',
    	mainClass: 'mfp-with-zoom mfp-img-mobile',
    	gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});


    $("#subscribeForm").submit(function(){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: '/subscribe/add/',
            data: $('#subscribeForm').serialize(),
            success: function (data) {
                if (data.status == 1) {
                    alert(data.msg);
                } else {
                    alert(data.msg);
                }
            },
            error: function(data) {
                alert('request error');
            }
        });
        return false;
    });
    
    // 移除右侧的空广告栏
    $('.sidebar-ad').each(function(){
    	if ($(this).find('.ad').length == 0) {
    		$(this).remove();
    	}
    });
    
    //懒加载
    $("img.lazy").lazyload({
        effect: 'fadeIn'
    });
})