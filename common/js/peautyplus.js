
$(function(){ 	
	
	//팝업
	
	
		$("#pw_popup_open").click(function(){ 
			$("#pw_popup_wrap").css("display", "block"); 
			$("#pw_mask").css("display", "block"); 
			$('.prod_view').slick('refresh');
		});  
		$("#pw_popup_close").click(function(){ 
			$("#pw_popup_wrap").css("display", "none"); 
			$("#pw_mask").css("display", "none"); 
	});
	
});
		
$(function(){ 	
	
		$("#lcs_popup_open").click(function(){ 
			$("#lcs_popup_wrap").css("display", "block");
			$("#lcs_pw_mask").css("display", "block"); 
			$('.prod_view').slick('refresh');
		});  
		$("#lcs_popup_close").click(function(){ 
			$("#lcs_popup_wrap").css("display", "none"); 
			$("#lcs_pw_mask").css("display", "none"); 
	});
	
}); 

$(function(){ 	
	
		$("#ft_lcs_popup_open").click(function(){ 
			$("#ft_lcs_popup_wrap").css("display", "block");
			$("#ft_lcs_pw_mask").css("display", "block"); 
			$('.prod_view').slick('refresh');
		});  
		$("#ft_lcs_popup_close").click(function(){ 
			$("#ft_lcs_popup_wrap").css("display", "none"); 
			$("#ft_lcs_pw_mask").css("display", "none"); 
	});
	
}); 

$(function(){ 	
    // selectbox styling
    $('.mainslt02').niceSelect();
}); 

//썸네일
$(function(){
    $(".pop_thum a").click(function(){            //클릭 시
        var imgPath = $(this).attr("href");     //클릭한 a태그의 하이퍼링크를 변수저장
        $("#mainImg>img").attr({src:imgPath})   //메인 이미지의 주소 속성에 할당
        .hide()                                 //fadein()효과를 보여주기 위해 숨김처리
        .fadeIn();                              //fadeIn()
        return false;                           //<a> 의 본래기능 (하이퍼링크) 작동방지
    });
});


$(function(){
  $('.tab_content > div').hide();
  $('.tab_nav a').click(function () {
    $('.tab_content > div').hide().filter(this.hash).fadeIn();
    $('.tab_nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
	
  });



	
 

