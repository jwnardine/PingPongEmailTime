// var AlarmTime = require('./../js/alarmclock-interface.js');
//
// $(document).ready(function() {
//   setInterval(function() {
//     var time = moment().format('HH:mm');
//     $('#time').html(time);
//   }, 1000);
// });

exports.Clock = function() {
  this.time = moment().format("HH:mm");
  document.getElementById('time').innerHTML = this.time;
  setTimeout(exports.Clock, 1000);
  return time;
};

exports.checkAlarm = function(alarmTime) {

    setInterval(function() {
      var time = moment().format("HH:mm");
        if (time === alarmTime) {
          alert("Wake up!");
        }
    }, 1000);
};
