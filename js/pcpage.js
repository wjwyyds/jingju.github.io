// JavaScript Document
window.onload = function(){ 
  var mySwiper = new Swiper('.swiper-container',{
	speed:400,
	mode : 'vertical', 
	resistance:'100%',
	mousewheelControl : true,
	grabCursor: true,
    paginationClickable: true,
	onFirstInit:function(){
		$('.slide1').addClass('ani-slide');
		}
    })
  
mySwiper.wrapperTransitionEnd(function () {//隐藏方法
	$('.ani-slide').removeClass('ani-slide')
	$('.swiper-slide').eq(mySwiper.activeIndex).addClass('ani-slide')
	},true);
	}