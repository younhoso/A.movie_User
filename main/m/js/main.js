$(document).ready(function(){
    //mobile,PC 매뉴 햄버거 버튼 이벤트
    
    
    
    
    
//    $('.header_left').click(function(){
//        $('header').toggleClass('hambeger_show');
//    });
//    
//    //mobile,PC 윈도우 버튼 클릭하면 사이드 바 사라지는 이벤트 **$(e.target).hasClass()는 자식에게 다이랙트로 식별한다.**
//    $(document).on('click', function(e){
//        if(!$(e.target).hasClass('txt_16') && !$(e.target).hasClass('in_e_Dpink') && !$(e.target).hasClass('login_btn')){
//			 $('.form_wrapper').removeClass('active');
//        }
//    }); 

//    //mobile,pc 로그인 버튼 클릭하면 사이드 바 나오는 이벤트
//    $('.header_right').click(function () {
//        $('.mobile_wrapper').addClass('active');
//    });
//
//    //mobil,pc  윈도우 버튼 클릭하면 사이드 바 사라지는 이벤트 **$(e.target).hasClass()는 자식에게 다이랙트로 식별한다.**
//    $(document).on('click',function(e){
//        if (!$(e.target).hasClass('txt_16') && !$(e.target).hasClass('in_e_Dpink') && !$(e.target).hasClass('login_btn') || e.target.className == "mobile_wrapper.active"){
//            $('.mobile_wrapper').removeClass('active');
//        }
//    });

    //mobile, PC 해더부분 스타일 부분 스크롤 영역
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > 200){
            console.log('___1');
            $('.header_bg').addClass('small');
        }else{
            $(".header_bg").removeClass("small");
        }
    });

    //mobile 컨텐츠 영화 리스트 슬라이드
    $('.tab_action').owlCarousel({
        loop: true,
        margin: 10,
        stagePadding: 20,
        autoplayTimeout: 1500,
        // autoplay: true,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            }
        }
    });

    //mobile 컨텐츠 영화 리스트 슬라이드
    $('.tab_action_event').owlCarousel({
        loop: true,
        margin: 10,
        stagePadding: 20,
        autoplayTimeout: 1500,
        // autoplay: true,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    //mobile 컨텐츠 공지사항 슬라이드
    $('.tab_action_notice').owlCarousel({
        loop: true,
        margin: 20,
        autoplayTimeout: 2500,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
   
    //mobile tabs 영화예매 (탭방식)
    $('.tabs li').click(function() {
         //var index = $('.tabs li').index(this);
         var index = $(this).index();
        $('.tab_action:eq('+index+')').siblings().hide();
        $('.tab_action:eq('+index+')').fadeIn();

        if ($(this).hasClass('active') == true){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });

    //mobile tabs_event 이벤트
    $('.tabs_event li').click(function () {
        var index = $(this).index();
        $('.tab_action_event:eq(' + index + ')').siblings().hide();
        $('.tab_action_event:eq(' + index + ')').fadeIn();

        if ($(this).hasClass('active') == true) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });
});