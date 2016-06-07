$(document).ready(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  
  function clearLights() {
    $('.bulb').css('background-color', 'black');
  }

  function illuminateRed() {
    clearLights();
    $('#stopLight').css('background-color', 'red');
  }

  function illuminateYellow() {
    clearLights();
    $('#slowLight').css('background-color', 'yellow');
  }

  function illuminateGreen() {
    clearLights();
    $('#goLight').css('background-color', 'green');
  }


});
