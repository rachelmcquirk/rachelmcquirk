var button = document.querySelector('button');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.font = "35px Open Sans";
var wordArray = [];

var onClick = function() {
  var input = document.getElementById('text-entry').value;
  var randomX = Math.floor(Math.random() * 1300);
  var color = randomColor();
  var speed = 0.5 + Math.floor(Math.random() * 4);
  var isNegative = Math.random() < 0.5;
  if (isNegative)
    speed *= -1;
  var word = {
    input: input,
    randomX: randomX,
    color: color,
    speed: speed
  };
  wordArray.push(word);
};

button.addEventListener('click', onClick);

function updatePositions() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var textSize = ctx.measureText(word.input);
    ctx.fillStyle = word.color;
    word.randomX += word.speed;
    ctx.fillText(word.input, word.randomX, 50);
    if (word.speed > 0 && word.randomX > window.innerWidth)
      word.randomX = -textSize.width;
    if (word.speed < 0 && word.randomX < -textSize.width)
      word.randomX = window.innerWidth + textSize.width;
  }
  window.requestAnimationFrame(updatePositions);
}

window.requestAnimationFrame(updatePositions);
