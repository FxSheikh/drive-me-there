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

// datetimepicker initializer
var date = new Date();
var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

$('#datetimepicker1').datetimepicker({
  minDate: today,
  format: 'ddd D MMMM, YYYY',
  allowInputToggle: true,
});

// widgetPositioning: { horizontal: 'right', vertical: 'bottom'}
// defaultDate: new Date(),
// $('#datetimepicker1').data("DateTimePicker").debug(true);
// format: 'DD-MM-YYYY'

// google autocomplete initializer
function initialize() {
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {HTMLInputElement} */(document.getElementById('pick_location')),
    { types: ['geocode'] });

 destination = new google.maps.places.Autocomplete(
    /** @type {HTMLInputElement} */(document.getElementById('dest_location')),
    { types: ['geocode'] });

}

google.maps.event.addDomListener(window, 'load', initialize);

