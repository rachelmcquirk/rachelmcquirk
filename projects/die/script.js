var button = document.querySelector('button');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var sound = document.getElementById('sound');

var numberArray = [1, 2, 3, 4, 5, 6];

var onClick = function() {
  sound.currentTime = 0;
  sound.play();
  var randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
  if (randomNumber === 1) {
    one.classList.remove('visible');
    two.classList.remove('visible');
    three.classList.remove('visible');
    four.classList.remove('visible');
    five.classList.add('visible');
    six.classList.remove('visible');
    seven.classList.remove('visible');
  }
  if (randomNumber === 2) {
    one.classList.remove('visible');
    two.classList.remove('visible');
    three.classList.add('visible');
    four.classList.add('visible');
    five.classList.remove('visible');
    six.classList.remove('visible');
    seven.classList.remove('visible');
  }
  if (randomNumber === 3) {
    one.classList.remove('visible');
    two.classList.remove('visible');
    three.classList.add('visible');
    four.classList.add('visible');
    five.classList.add('visible');
    six.classList.remove('visible');
    seven.classList.remove('visible');
  }
  if (randomNumber === 4) {
    one.classList.add('visible');
    two.classList.remove('visible');
    three.classList.add('visible');
    four.classList.add('visible');
    five.classList.remove('visible');
    six.classList.remove('visible');
    seven.classList.add('visible');
  }
  if (randomNumber === 5) {
    one.classList.add('visible');
    two.classList.remove('visible');
    three.classList.add('visible');
    four.classList.add('visible');
    five.classList.add('visible');
    six.classList.remove('visible');
    seven.classList.add('visible');
  }
  if (randomNumber === 6) {
    one.classList.add('visible');
    two.classList.add('visible');
    three.classList.add('visible');
    four.classList.add('visible');
    five.classList.remove('visible');
    six.classList.add('visible');
    seven.classList.add('visible');
  }
};

button.addEventListener('click', onClick);
