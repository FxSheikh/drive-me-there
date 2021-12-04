// clearing the form values on reload
$(document).ready(function(){
    $('#pick_location').val('');
    $('#dest_location').val('');
    $('#timepicker').val('');
    $('#datepick').val('');
});

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


// timepicker intializer
$('#timepicker').pickatime({
    interval: 15,
    onClose: function() {
        $(this)[0].$holder.blur();
    }
});

// datetimepicker initializer
var date = new Date();
var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

$('#datetimepicker1').datetimepicker({
  	minDate: today,
  	format: 'ddd D MMMM, YYYY',
  	allowInputToggle: true,
});

// more datetimepicker settings
// widgetPositioning: { horizontal: 'right', vertical: 'bottom'}
// defaultDate: new Date(),
// $('#datetimepicker1').data("DateTimePicker").debug(true);
// format: 'DD-MM-YYYY'
