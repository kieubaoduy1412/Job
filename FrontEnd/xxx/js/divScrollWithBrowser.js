$(window).scroll(function(){
    console.log( $(window).scrollTop());
    if( $(window).scrollTop()>20){
    	$(".animation-block").addClass("fixed")
    } else {
    	$(".animation-block").removeClass("fixed")
    }
});
