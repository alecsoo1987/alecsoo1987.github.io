$(document).ready(function () {
    var offsetnum = $('.gnbwrap').offset().top;
    var contentsSlideNum=0
    var contentsSt;
    var slide_st;
    var info_img=['images/info/info_1_big.jpg','images/info/info_2_big.jpg','images/info/info_3_big.jpg','images/info/info_4_big.jpg']

    /*GNB영역*/
    $(window).scroll(function () {
        var scrolllocation = $(window).scrollTop();
        if (scrolllocation > offsetnum) {
            $('.gnbwrap').css('position', 'fixed')
            $('.gnbwrap').css('top', '0px')
            $('.gnbheadwrap').addClass('scroll')
        } else {
            $('.gnbwrap').css('position', 'absolute')
            $('.gnbwrap').css('top', '35px')
            $('.gnbheadwrap').removeClass('scroll')
        }
    })
    $('.gnb_1_list > li').on({
        mouseenter: function (e) {
            e.preventDefault();
            $('.gnbheadwrap').addClass('on')
            $('.gnbmainwrap').addClass('on')
            $('.gnb_2_list').css('display', 'block')
            $(this).parent().css('color','red')
        },
        mouseleave: function (e) {
            e.preventDefault();
            $('.gnbheadwrap').removeClass('on')
            $('.gnbmainwrap').removeClass('on')
            $('.gnb_2_list').css('display', 'none')
        }
    })

    /*노티스 영역*/
    $('.notice_2_depth').not($('.notice_2_depth:eq(0)')).hide();
    $('.notice_1_depth li').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $(this).addClass('on');
            $('.notice_title').not($(this)).removeClass('on')
            $('.notice_2_depth').hide();
            $(this).find('ul').show()
        })
    })

    /* 하단 슬라이드 영역 */
    $('.contents_rightBtn').on('click', function (e) {
        e.preventDefault();
        contentsSlideNum++
        if (contentsSlideNum > 2) {
            contentsSlideNum = 0
        }
        $('.slide_btn span.active').removeClass('active')
        $('.slide_btn span:eq(' + contentsSlideNum + ')').addClass('active')

        $('.contents').animate({
            left: '-' + 1295 * contentsSlideNum + 'px'
        }, 500)
        //                                       , function() {
        //                    $('.contents').append($('.contents ul:first'))
        //                    $('.contents').css('left', '0px')
        //
        //                })
    })
    $('.contents_rightBtn').hover(function () {
        clearInterval(slide_st)
    })
    $('.contents_rightBtn').mouseleave(function () {
        clearInterval(slide_st)
        slide_st = setInterval(bottomslideanimation, 3000)
    })
    $('.contents_leftBtn').on('click', function (e) {
        e.preventDefault();
        clearInterval(slide_st)
        contentsSlideNum--
        if (contentsSlideNum < 0) {
            contentsSlideNum = 2
        }
        $('.slide_btn span.active').removeClass('active')
        $('.slide_btn span:eq(' + contentsSlideNum + ')').addClass('active')
        //                $('.contents').prepend($('.contents ul:last'))
        //                $('.contents').css('left', '-1295px')
        $('.contents').animate({
            left: '-' + 1295 * contentsSlideNum + 'px'
        }, 500)
    })
    $('.contents_leftBtn').hover(function () {
        clearInterval(slide_st)
    })
    $('.contents_leftBtn').mouseleave(function () {
        clearInterval(slide_st)
        slide_st = setInterval(bottomslideanimation, 3000)
    })

    $('.slide_btn span').each(function () {        
        $(this).click(function (e) {
            e.preventDefault();
            clearInterval(slide_st)
            var ti = ($(this).index())
            var slide_width = 1295
            $('.contents').animate({
                left: '-' + 1295 * ti + 'px'
            })
            $('.slide_btn span.active').removeClass('active')
            $(this).addClass('active')
            contentsSlideNum = ti;
        })

    })    

    slide_st = setInterval(bottomslideanimation, 3000)
    st = setInterval(autoPlay, 3000)
    
    $('.gnb_1_list li').each(function(){
        
        $(this).hover(function(){
            $('.gnb_1_list li.on').removeClass('on')
            $(this).addClass('on')
        })
    })
    
    /*GAME INFO 영역*/
    $('.raid_info').hover(function(){        
        $('.show_img img').prop('src',info_img[0])        
    })
    
    $('.char_info').hover(function(){        
        $('.show_img img').prop('src',info_img[1])        
    })
    
    $('.quest_info').hover(function(){        
        $('.show_img img').prop('src',info_img[2])        
    })
    
    $('.skill_info').hover(function(){        
        $('.show_img img').prop('src',info_img[3])        
    })
    

}) /*ready function 끝*/

function bottomslideanimation() { //함수 만들고 ready안에서 호출함
    $('.contents_rightBtn').trigger('click')
}

$('.visualWrap div:gt(0)').hide();

function changeItem(idx) {
    if (idx > $('.swipe_list li').length - 1) {
        idx = 0
    }
    if (idx > 2) {
        $('.swipe_list').animate({
            left: '-270px'
        })
    } else {
        $('.swipe_list').animate({
            left: '0px'
        })
    }

    $('.swipe_list li.selected').removeClass('selected')
    $('.swipe_list li:eq(' + idx + ')').addClass('selected')
    $('.visualWarp div').hide();
    $('.visualWrap div').stop().fadeOut(1500)
    $('.visualWrap div:eq(' + idx + ')').fadeIn(900);
}

function changeItem_minus(ids) {
    if (ids < 0) {
        ids = 4
    }
    if (ids > 2) {
        $('.swipe_list').animate({
            left: '-270px'
        })
    } else {
        $('.swipe_list').animate({
            left: '0px'
        })
    }

    $('.swipe_list li.selected').removeClass('selected')
    $('.swipe_list li:eq(' + ids + ')').addClass('selected')
    $('.visualWarp div').hide();
    $('.visualWrap div').stop().fadeOut(1500)
    $('.visualWrap div:eq(' + ids + ')').fadeIn(900);
}

var st;

function autoPlay() {
    var idx = $('.swipe_list li.selected').index(); //현재선택되어있는것의 인덱스번호
    idx++
    changeItem(idx)
}

function autoPlay_left() {
    var idx_minus = $('.swipe_list li.selected').index(); //현재선택되어있는것의 인덱스번호
    idx_minus--
    changeItem_minus(idx_minus)
}

$(document).ready(function () {
    $('.swipe_right_btn').click(function () {
        clearInterval(st)
        changeItem($('.swipe_list li.selected').index() + 1)
    })
    $('.swipe_left_btn').click(function () {
        clearInterval(st)
        changeItem_minus($('.swipe_list li.selected').index() - 1)
        st = setInterval(autoPlay_left, 3000)
    })

    $('.swipe_right_btn').mouseleave(function () {
        clearInterval(st)
        st = setInterval(autoPlay, 3000)
    })

    $('.swipe_list li').click(function () {
        clearInterval(st)
        if ($(this).hasClass('selected') == false) {
            changeItem($(this).index())
        }
    })

    $('.swipe_list li').mouseleave(function () {
        clearInterval(st)
        st = setInterval(autoPlay, 3000)
    })

})
