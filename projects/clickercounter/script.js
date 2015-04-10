var button = document.getElementById('button');
var timer = document.getElementById('timer');
var count = document.getElementById('count');
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');
var number = document.getElementById('number');
var clicks = 0;
var seconds = 0;
var time = null;

var onClick = function() {

  button.removeEventListener('click', onClick);

  h1.innerHTML = '';
  h3.innerHTML = '';
  addSecond();
  time = setInterval(addSecond, 1000);
  button.style.display = 'none';

  document.body.addEventListener('mousedown', bodyClick);
};

var bodyClick = function() {
  clicks += 1;
  count.innerHTML = clicks;
};


function addSecond() {
  if (seconds < 30) {
    seconds = seconds += 1;
    timer.innerHTML = 'Timer: ' + seconds;
    timer.style.fontSize = ('55px');
    if(seconds > 24) {
      timer.style.color = 'red';
    }
  }
  else {
    window.clearInterval(time);
    document.body.removeEventListener('mousedown', bodyClick);
    var average = (Math.round((clicks / 30) *100)) / 100;
    h1.innerHTML = 'Time\'s up!';
    if (clicks < 135) {
      timer.style.color = 'black';
      timer.style.fontSize = ('30px');
      h3.innerHTML = 'You got <span style="color:rgb(244, 100, 127)">' + clicks + '</span> clicks. You can do better than that!';
      timer.innerHTML = 'That\'s only <span style="color:rgb(244, 100, 127)">' + average + '</span> clicks per second.';
      number.innerHTML = '<a href="http://rachelmcquirk.com/projects/clickercounter">Try Again?</a>';
      count.innerHTML = '';
    }
    else {
      timer.style.color = 'black';
      timer.style.fontSize = ('30px');
      h3.innerHTML = 'Wooohooo! You got <span style="color:rgb(244, 100, 127)">' + clicks + '</span> clicks.';
      timer.innerHTML = 'That\'s <span style="color:rgb(244, 100, 127)">' + average + '</span> clicks per second!';
      number.innerHTML = '<a href="http://rachelmcquirk.com/projects/clickercounter">Think you can do better?</a>';
      count.innerHTML = '';
    }
  }
}



button.addEventListener('click', onClick);
