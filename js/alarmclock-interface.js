var checkAlarm = require('./../js/time-interface.js').checkAlarm;

$(document).ready(function() {
  $('#alarmSet').submit(function(event) {
    event.preventDefault();
    var alarmTime = $('#timeinput').val();
    // $('#timeinput').val("");
      $('.showTime').text("You set your alarm for " + alarmTime);
      console.log(alarmTime);
    });
  });
  // 
  // $(document).ready(function() {
  // $('#alarmSet').click(function() {
  //   var alarmTime = $('#timeinput').val();
  //   $('#timeinput').val("");
  //     $('.showTime').text("You set your alarm for " + alarmTime);
  //   });
  // });
