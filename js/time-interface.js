var AlarmTime = require('./../js/alarmclock-interface.js').AlarmModule;

$(document).ready(function() {
  setInterval(function() {
    var time = moment().format('HH:mm:ss a');
    $('#time').html(time);
  }, 1000);
});
