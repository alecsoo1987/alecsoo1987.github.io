$(document).ready(function () {
    var info_img=['img/hotel11.jpg','img/hotel22.jpg','img/hotel33.jpg','img/hotel44.jpg','img/hotel55.jpg']
    //var offsetnum = $('.gnbwrap').offset().top;    
    /*GNB영역*/
    //$('.header_list ul').hide();
    $('.gnb_main_depth > li').each(function(){
        var linum=$(this).index();        
        $(this).mouseenter(function(e){
            e.preventDefault();
            $('.gnb_main_depth > li.on').removeClass()
            $(this).addClass('on')
            $('.show_img img').prop('src',info_img[linum])
            
            aa(linum)
            console.log(linum);
        })         
        })
        $('.header_list').mouseleave(function(e){
            e.preventDefault();
            $(this).find('ul').removeClass('on')
            $('.show_img img').prop('src','')
            $('.gnb_main_depth > li').removeClass('on')
        })
        function aa(linum){
            
            if($('.gnb_main_depth > li:eq('+linum+')').hasClass='on'){     
                $('.header_list > ul').removeClass('on')
                $('.gnb_list'+(linum+1)+'').addClass('on');
            }else{
                $('.headerWrap').removeClass('on')
            }
                
        }
    
    var st;
    var contentsSlideNum=0;
    $('.nextbtn').on('click', function (e) {
        e.preventDefault();
        contentsSlideNum++
        if (contentsSlideNum > 4) {
            contentsSlideNum = 0
        }
        $('.slide_btn span.on').removeClass('on')
        $('.slide_btn span:eq(' + contentsSlideNum + ')').addClass('on')
        $('.room_list li:eq('+contentsSlideNum+')').addClass('on')

        $('.room_list li').css('transform','translateX(-'+(contentsSlideNum*100)+'%)')
    })
    $('.prevbtn').on('click', function (e) {
        e.preventDefault();
        contentsSlideNum--
        if (contentsSlideNum < 0) {
            contentsSlideNum = 4
        }
        $('.slide_btn span.on').removeClass('on')
        $('.slide_btn span:eq(' + contentsSlideNum + ')').addClass('on')
        $('.room_list li:eq('+contentsSlideNum+')').addClass('on')

        $('.room_list li').css('transform','translateX(-'+(contentsSlideNum*100)+'%)')
    })
        st=setInterval(autoplay,3000)
    })
    
    $('.more_btn2').click(function(e){
        e.preventDefault();
        $('.header_menu2').css('display','block');
        $('.header_menu2').addClass('on')
        $('.header_title').hide();
        $()
    })
    $('.cancelbtn').click(function(e){
        e.preventDefault();
        $('.header_menu2').css('display','none');
        $('.header_menu2').removeClass('on')
        $('.header_title').show();
    })
    
    function autoplay(){
        $('.nextbtn').trigger('click')
    }

$('.gnb_main_depth2 li > ul').hide()
$('.gnb_main_depth2 li').click(function(){
    if($(this).find('ul').css('display')=='none'){
        $(this).find('ul').slideDown(300)
    }else{
        $(this).find('ul').slideUp(300)
    }
    
})

   
