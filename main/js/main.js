// 한글입력 방지 함수
function fn_press_han(obj) {
    //좌우 방향키, 백스페이스, 딜리트, 탭키에 대한 예외
    if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39
        || event.keyCode == 46) return;
    //obj.value = obj.value.replace(/[\a-zㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
    obj.value = obj.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
}

//회원가입 입력 받을때 값이 비어 있으면 경고창 띄어주는 함수
function inputCheck() {
    var chk = $('.id_user').prop('checked');
    alert(chk);
    if ($('.join_cheak_id').val() === "") {
        alert("아이디를 입력해 주세요.");
        $('.join_cheak_id').focus();
        return;
    }
    if ($('.cheakpw').val() == "") {
        alert("비밀번호를 입력해 주세요.");
        $('.cheakpw').val().focus();
        return;
    }
    if ($('.cheakpw1').val() == "") {
        alert("비밀번호를 확인해 주세요");
        $('.cheakpw1').val().focus();
        return;
    }
    if ($('.cheakname').val() == "") {
        alert("이름을 입력해 주세요.");
        $('.cheakname').val().focus();
        return;
    }
    if ($('.cheakemail').val() == "") {
        alert("이메일을 입력해 주세요.");
        $('.cheakemail').val().focus();
        return;
    }
    if ($('.cheakenumber').val() == "") {
        alert("연락처를 입력해 주세요.");
        $('.cheakenumber').val().focus();
        return;
    }
    //비밀번호 확인, 서로 일치하지하는지 채크 하는 함수
    if ($('.cheakpw').val() != $('.cheakpw1').val()) {
        $('.passwordCheckMessage').css({
            'color': 'red',
            'font-size': '14px',
            'margin-top': '10px'
        }).html('비밀번호가 서로 일치하지 않습니다.');
            $('.cheakpw1').focus();
            return;
        } else {
            $('.passwordCheckMessage').html('');
        }
    // 실제 DB와 연결시에는 submit 함수와, alert함수가 반대로 작성해야지만 논리적으로 말이 맞다.
    if (chk == true){
        // alert('중복체크를 해야 합니다.');
        $('#myForm').submit();
    } else if (chk == false){
        alert('중복체크를 해야 합니다.');
       
    }
}

//아이디 중복체크 ajax 구현 함수
function registerCheckFunction() {
    var member_id = $('#reg_mb_id').val();
    // ajax 사용하지 않고, 아이디 중복체크 간단한 테스트 하기 위한 로직
    // if ($('#reg_mb_id').val().length > 1) {
    //    $('.id_users').html('사용할 수 있는 아이디 입니다.');
    // } else {
    //    $('.id_users').html('사용할 수 없는 아이디 입니다.');
    // }
    $.ajax({
        type:'post',
        url: "index.html",
        data: { member_id: member_id },
        success: function (data) {
            if (data == 0) {
                $('.id_user').prop('checked', true);
                $('.id_users').css({
                    'color': 'blue',
                    'font-size': '14px'
                }).text('사용할 수 있는 아이디 입니다.');
            } else {
                $('.id_user').prop('checked', false);
                $('.id_users').css({
                    'color': 'red',
                    'font-size': '14px'
                }).html('사용할 수 없는 아이디 입니다.');
            }
        }
    });
}


//  //아이디 중복체크 무조건 눌러야지 다음단계 넘어가는 함수
// function checkValue(idCheck) {
//     if (idCheck == false) {
//         alert('중복체크를 해야지만 다음으로 넘어갈수 있습니다.');
//     } else if (idCheck == true){
//         $('#myForm').submit();
//     }
// }

$(document).ready(function () {
//mobile,pc 로그인 버튼 클릭하면 사이드 바 나오는 이벤트
$('.large_contents:eq(5)').click(function () {
    $('.form_wrapper').addClass('active');
});

//mobile,pc 윈도우 버튼 클릭하면 사이드 바 사라지는 이벤트 **$(e.target).hasClass()는 자식에게 다이랙트로 식별한다.**
$(document).on('click', function(e) {
    if (!$(e.target).hasClass('tit_16') && !$(e.target).hasClass('txt_14') && !$(e.target).hasClass('in_e_Dpink') && !$(e.target).hasClass('login_btn')) {
        $('.form_wrapper').removeClass('active');
    }
});

//index 페이지 가로 스크롤 작업
    $("#content-5").mCustomScrollbar({
        axis: "x",
        theme: "dark-thin",
        autoExpandScrollbar: true,
        advanced: { autoExpandHorizontalScroll: true }
    });
    
//index 페이지 작업
    $(".pc_list").on({
        mouseenter:function(){
            $(this).find('.table_cell_middle a').show(100);
            $(this).find('.bg').fadeIn();
            $(this).find('.bg').addClass('active');
        },
        mouseleave:function() {
            $(this).find('.bg').removeClass('active');
            $(this).find('.bg').hide();
            $(this).find('.table_cell_middle a').hide();
        }
    });
    
    //index 페이지 pop_up 작업 및 포스터, 제목 get,set 작업
    $('.reserveBtn').on('click', function(){

        $('.pop_up_bg').fadeIn();

        var movieName = $(this).closest('.bg').next('.title').children('h3').html();
        $("#reserveMovieName").html(movieName);

         var movieImage = $(this).closest('.pc_list').find('.front > .img').attr('src');
        $('#reserveStillImg').attr('src',movieImage);

        var movieText = $(this).closest('.bg').next('.title').children('p').html();
        $('#movieText').html(movieText);

    });

    //index 페이지 윈도우 클릭시 pop_up 사라짐
    $(document).on('click', function(e){
        if($(e.target).hasClass('pop_up_bg') == true){
            $('.pop_up_bg').fadeOut();
            $('.pop_up_post_inner').css('height','560px');
        }
    });
    
    //시간 클릭시 폰트 색상 변화
        $(".course_sort_list" ).click(function() {
            var $bors = $(this).siblings();
            if($(this).hasClass('active') == true){
               $(this).addClass('active');
                $bors.removeClass('active');
            }else{
                $(this).addClass('active');
                $bors.removeClass('active');
            }
            
    //pop_up 시간 클릭시 slideDown 작동
    $( ".pop_up_post_inner" ).slideDown( "slow", function() {
            $(this).css('height','1220px');
        });
    });
        
    //pop_up 지점점 이름 슬라이드 작업
    $("#content-6").mCustomScrollbar({
        axis:"x",
        theme:"light-3",
        advanced:{autoExpandHorizontalScroll:false}
    });
    //pop_up 지점점 이름 슬라이드 작업
    $("#content-7").mCustomScrollbar({
        axis: "x",
        theme: "light-3",
        advanced: { autoExpandHorizontalScroll: false }
    });
        
    //지점점 도시 이름 나타나고, 사라짐 작업
    $(".area_list").click(function(){
        var $me = $(this).find('.soul_wrap');
        var $bors = $(this).siblings().find('.soul_wrap');
        if($me.hasClass('active') == true){
            $me.addClass('active');
            $bors.removeClass('active');
        }else{
            $me.addClass('active');
            $bors.removeClass('active');
        }
    });

    //지점점 도시 이름 폰트 색상 변화
    $(".cinema_list").click(function(){
        var $bors = $(this).siblings();
        if($(this).is('.cinema_list') == true){
            $(this).css('color','#ed3c5f');  
            $bors.css('color','#fff');  
           }
    });

    
    //index 페이지 pop_up 좌석 인원 채크 플러스 버튼 작업
    $(".bookingSelectSeatTicket .plus").click(function(e){
        e.preventDefault();
        var price = Number($(this).parent().find("label:eq(0)").attr("data"));
        var cnt = Number($(this).parent().find(".reserveCnt").html());
        cnt = cnt + 1; 
        $(this).parent().find(".reserveCnt").html(cnt);
        var total = Number(uncomma($("#ticketTotalPrice").html()));
        $("#ticketTotalPrice").html(comma(total + price));
    })
    
    //index 페이지 pop_up 좌석 인원 채크 마이너스 버튼 작업
    $(".bookingSelectSeatTicket .minus").click(function(e){
        e.preventDefault();
        var price = Number($(this).parent().find("label:eq(0)").attr("data"));
        var cnt = Number($(this).parent().find(".reserveCnt").html());
        if(cnt == 0) {
            return;
        }
        cnt = cnt - 1; 
        $(this).parent().find(".reserveCnt").html(cnt);
        var total = Number(uncomma($("#ticketTotalPrice").html()));
        $("#ticketTotalPrice").html(comma(total - price));
    });
    
    // 어른,청소년,어린이에 대한 토탈 x명을 구한다 **인원수에 맞에 좌석 채크함**
    $('.screen_wrapper td').click(function(e){
        var reserveCnt = 0;
        reserveCnt += parseInt($('.reserveCnt:eq(0)').text());
        reserveCnt += parseInt($('.reserveCnt:eq(1)').text());
        reserveCnt += parseInt($('.reserveCnt:eq(2)').text());
        
        var index = $('.screen_wrapper td').index(this);
        if(reserveCnt > 0){
            // 선택되어있는 좌석의 수보다 예약인원수가 클 경우
            if($('.screen_wrapper td.over').length < reserveCnt){
                // td에 over클래스에 대한 addClass/removeClass 토글기능 적용
                $('.screen_wrapper td:eq('+index+')').toggleClass('over');
               }
            //그외에는 클릭한 좌석에 over클래스가 적용되어있을 경우
            else if($('.screen_wrapper td').eq(index).hasClass('over')){
                // over클래스 삭제(좌석예약 취소)
                $('.screen_wrapper td:eq('+index+')').removeClass('over');
                }
            }else if($('.screen_wrapper td').eq(index).hasClass('over')){
                $('.screen_wrapper td:eq('+index+')').removeClass('over');
                }
            else if(!$(e.target).hasClass('over')){
                alert('인원수부터 선택해주세요');
            }
        });

    // 상세페이지 별점 측정 객체를 생성하여 변수에 담는다. $rateYo 
    var $rateYo = $("#rateYo").rateYo({
        rating: 2,
        fullStar: true,
        readOnly: false,
        ratedFill: "#ed3c5f",
        //mousemove 이벤트 발생, 첫번째 score 의 값으로 점수를 매길 수 있다
            onChange: function (score) {
                // 점수에 따라 문자를 변경해준다
                var txt = "";
                var val = "";
                if (score == 0) {
                    txt = "평점을 입력해주세요";
                    val = 0;
                    console.log(score);
                }
                else if (score == 1) {
                    txt = "괜히봤어요";
                    val = 1;
                    console.log(score);
                }
                else if (score == 2) {
                    txt = "기대하진 말아요";
                    val = 2;
                    console.log(score);
                }
                else if (score == 3) {
                    txt = "무난했어요";
                    val = 3;
                    console.log(score);
                }
                else if (score == 4) {
                    txt = "기대해도 좋아요!";
                    val = 4;
                    console.log(score);
                }
                else if (score > 4) {
                    txt = "너무 멋진 영화였어요!";
                    val = 5;
                    console.log(score);
                }
                $("#movieDetailStarScoreTxt").text(txt);
                $(".rateYoee").val(val);
            }
    });

    //댓글 기능
    $('#saveBtn').click(function (){
        var content = $('#content').val();
        if(content == ""){
            alert("댓글을 입력하세요!");
            return;
        }else{
            var tag = '<li>'+
                        '<div class="photo_profile">'+
                            '<img src="http://image2.megabox.co.kr/mop/home/user/profile_m.png"/ alt="interpret** 프로필사진 없음">'+
                        '</div>'+  
                        '<div class="text">'+
                            '<div class="name_inner">' +
                                '<div class="name">'+
                                    '<strong>sangss**</strong>'+
                                    '<span>18.10.03</span>'+
                                    //평점 시작
                                    '<div class="ratingee">'+
                                        '<div class="my_rate1 txt_16">'+
                                            '<div id="rateYoee" style="display: inline-block; width: 100px;"></div>'+
                                        '</div>'+
                                    '</div>'+
                                    //평점 시작 끝
                                '</div>'+
                                '<p>'+
                                    '<span class="comment">'+content+'</span>'+
                                '</p>'+
                            '</div>' +
                        '</div>'+
                      '</li>';  

            $('#movieCommentList ul.item').prepend(tag);
            var size = $('#movieCommentList ul.item li').length;
            $('#movieCommentTotalCount').html(size);
            $('#content').val('').focus();
        }
        // 상세페이지 별점 측정 객체를 생성하여 변수에 담은 것을 여기서 set을 한다.
        var rating = $rateYo.rateYo("rating");
        $('.rateYoee').val(rating);
        $('#rateYoee').rateYo({
            rating : rating,
            readOnly: true, //별칭 고정시킨다.
            ratedFill: "#ed3c5f"
        })
        
    });


    $('.deteilBtn').on('click', function () { 
        $('.derail_pop_up_wrap').fadeIn();

        var movieName = $(this).closest('.bg').next('.title').children('h3').html();
        $("#reserveDetaileName").html(movieName);

        var movieImage = $(this).closest('.pc_list').find('.front > .img').attr('src');
        $('#reserveDetaileImg').attr('src', movieImage);

        var movieText = $(this).closest('.bg').next('.title').children('p').html();
        $('#movieText').html(movieText);
    });
});


