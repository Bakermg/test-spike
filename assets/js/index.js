
$(document).ready(function() {

    //jQuery plugin for sticking nav to the top off the page
    $('#myNav').stickThis();

    // active widget
    $('#an-nyw_1').css({
    	'width': '80%',
    	'margin': 'auto',
    	'margin-top': '5px'
    });
    $('.an-nyw-window').css({
    	'width': '100%',
    	'margin': 'auto'
    });
    $('.an-nyw_1_results').css({
      'width': '100%',
      'margin': 'auto'
      // 'font-size': '1.1em'
    })

    // remove the animate classes on mobile views
    var width = $(window).width();
    console.log(width);
    if (width < 767) {
    	$('li').removeClass('hvr-float');
    }
});
