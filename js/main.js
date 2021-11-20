$(function(){ // 문서가 로딩되면 ...
    
    // 슬라이더   객체 : {}
    $('.visual').slick({
        autoplay : true,
        autoplaySpeed : 1000,
        pauseOnHover : false,
        fade : true ,
        dots : true,
    });

    $('.play').click(function(){
        $('.visual').slick('slickPlay');
    }); 

    $('.pause').click(function(){
        $('.visual').slick('slickPause');
    });


    //언어선택
    $('.top_lang > a').click(function(e){
        e.preventDefault(); // 기본이벤트 방지 
        $('.top_lang > ul').stop().slideToggle(); // slideDown(), slideUp() 한꺼번에 
    });

    //검색영역
    $('.search_area > a ').click(function(e){
        e.preventDefault(); 
        $('.search_area > div').stop().slideToggle();
    });
    $('.search_area .last').click(function(){
        $('.search_area > div').stop().slideUp();
    }); 

    //네비게이션 (클릭 - 닫기 메뉴 )
    $('.gnb > li > a').click(function(e){
        e.preventDefault();
        $('.snb').css({ display : 'none'});
        $(this).next('.snb').stop().css({display : 'block'});
    }); 
    $('.closeBtn').click(function(){
        $('.snb').css({display : 'none'}); 
    }); 

    //탭메뉴
    $('.board_tab').tabslet();

    // board 와 news 높이 제어
    let board_height = $('.board').outerHeight();
    $('.news').css({ "height" : board_height})

    
    $('.news_visual').slick({
        autoplay : true,
        autoplaySpeed : 1000,
        pauseOnHover : false,
        appendArrows : $('.arrow_box'),
    });

    


    





    




   
});