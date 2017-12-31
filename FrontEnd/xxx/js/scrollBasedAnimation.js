$(function(){
  var $elemsCountNumber = $('.countNumber');
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  $(window).scroll(function(){
    animate_elems();
    count_number();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  } // end animate_elems()

  function count_number(){
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    topcoords = $elemsCountNumber.offset().top; // element's distance from top of page in pixels
    if($elemsCountNumber.hasClass('counted')) { return true; }
    if(wintop > (topcoords - (winheight))) {
        // animate when top of the window is 3/4 above the element
        auto_increase_number();
        $elemsCountNumber.addClass('counted');
      }
  }

  function auto_increase_number(){
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
  
});