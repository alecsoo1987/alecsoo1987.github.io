		var i = 0;
		var st;
		var offset_1 = $('.section1').offset().top-50;
		var offset_2 = $('.section2').offset().top-50;
		var offset_3 = $('.section3').offset().top-50;
		var offset_4 = $('.section4').offset().top-50;
		var offset_b = (offset_4 - offset_3)*1.8




		$(document).ready(function () {


			$('#hometitle').addClass('show')
			var homt = $('#hometitle')

			$(window).scroll(function () {
				var wscroll = $(this).scrollTop();
				if (wscroll > 0 && wscroll < offset_2) {
					$('.nav li.active').removeClass('active')
					$('.nav li:eq(0)').addClass('active')
					
				} else if(wscroll > offset_2 && wscroll < offset_3) {
					$('.nav li.active').removeClass('active')
					$('.nav li:eq(1)').addClass('active')
				
				} else if(wscroll > offset_3 && wscroll < offset_b) {
					$('.nav li.active').removeClass('active')
					$('.nav li:eq(2)').addClass('active')					
				
				}else if(wscroll > offset_b) {
					$('.nav li.active').removeClass('active')
					$('.nav li:eq(3)').addClass('active')
				}
			})

			$('.section3').hover(function(){
				$('.skills').addClass('on')
			})
			$('.section3'&&'.section4').mouseleave(function(){
				$('.skills').removeClass('on')
			})

			$('.nav li').on({ 
				click: function (e) { //li를 클릭할때 동작
					e.preventDefault();
					
					var i = $(this).index();
					var offset = $('.section'+(i+1)+'').offset().top;
					
					$("html,body").animate({ //html의 바디가
						scrollTop: offset
						}, 600)
					
				}				
			})
			//offset()
            $('.first_explain button').hover(function(){
                $('.first_pp img').prop('src','images/responsive_before.png')
            })
            $('.first_explain button').mouseleave(function(){
                $('.first_pp img').prop('src','images/responsive.png')
            })
            
            $('.second_explain button').hover(function(){
                $('.second_pp img').prop('src','images/html5_before.png')
            })
            $('.second_explain button').mouseleave(function(){
                $('.second_pp img').prop('src','images/html5.png')
            })
            
            $('.third_explain button').hover(function(){
                $('.third_pp img').prop('src','images/html4_before.png')
            })
            $('.third_explain button').mouseleave(function(){
                $('.third_pp img').prop('src','images/html4.png')
            })
            
            $('.fourth_explain button').hover(function(){
                $('.fourth_pp img').prop('src','images/mobile_before.png')
            })
            $('.fourth_explain button').mouseleave(function(){
                $('.fourth_pp img').prop('src','images/mobile.png')
            })





		})
