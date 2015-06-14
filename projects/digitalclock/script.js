$(document).ready(function() {

    function displayTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var clock = document.getElementById('clock');

      var meridiem = 'AM';
      if (hours > 12) {
        hours = hours - 12;
        meridiem = 'PM';
      }
      if (hours === 0) {
        hours = 12;
      }

      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (hours < 10) {
        hours = '0' + hours;
      }

      clock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

      if (seconds === '00') {
        changeColor();
      }
    }


    function changeColor() {
      var message = document.getElementById('message');
      var number = randomColor();
      document.body.style.backgroundColor = number;
      message.innerHTML = 'The color of the minute is ' + number;
    }

    displayTime();
    changeColor();

    setInterval(displayTime, 1000);

});
