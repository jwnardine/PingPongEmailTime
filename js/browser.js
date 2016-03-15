var pingPong = require('./../js/ping-pong-interface.js').pingPong;
require('./../js/time-interface.js');
require('./../js/signup-interface.js');
require('./../js/weather-interface.js');
require('./../js/alarmclock-interface.js');

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
