// open menu when click toggle button    
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#wrapper").toggleClass("toggled");
});
    
// close menu on click outside 
$(document).click( function(){
    $('#wrapper').removeClass("toggled");
});

// close menu on resize browser window
$(window).resize(function(){
  $("#wrapper").removeClass("toggled");
});

// close menu when click on any sidebar link
$('.links').click(function() { 
  $('#wrapper').removeClass('toggled');
});





