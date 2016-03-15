$(document).ready(function() {
  $('#alarmSet').click(function() {
    var alarmTime = $('#timeinput').val();
    $('#timeinput').val("");
      $('.showTime').text("You set your alarm for " + alarmTime);
    });
  });
