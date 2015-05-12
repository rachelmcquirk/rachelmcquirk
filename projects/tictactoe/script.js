var box = document.querySelectorAll('.box');
var click = 0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

function checkVictory() {
  if (one.innerHTML === '<img src="/images/random/x.png">' && two.innerHTML === '<img src="/images/random/x.png">' && three.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (one.innerHTML === '<img src="/images/random/o.jpg">' && two.innerHTML === '<img src="/images/random/o.jpg">' && three.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (four.innerHTML === '<img src="/images/random/x.png">' && five.innerHTML === '<img src="/images/random/x.png">' && six.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (four.innerHTML === '<img src="/images/random/o.jpg">' && five.innerHTML === '<img src="/images/random/o.jpg">' && six.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (seven.innerHTML === '<img src="/images/random/x.png">' && eight.innerHTML === '<img src="/images/random/x.png">' && nine.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (seven.innerHTML === '<img src="/images/random/o.jpg">' && eight.innerHTML === '<img src="/images/random/o.jpg">' && nine.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (one.innerHTML === '<img src="/images/random/x.png">' && four.innerHTML === '<img src="/images/random/x.png">' && seven.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (one.innerHTML === '<img src="/images/random/o.jpg">' && four.innerHTML === '<img src="/images/random/o.jpg">' && seven.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (two.innerHTML === '<img src="/images/random/x.png">' && five.innerHTML === '<img src="/images/random/x.png">' && eight.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (two.innerHTML === '<img src="/images/random/o.jpg">' && five.innerHTML === '<img src="/images/random/o.jpg">' && eight.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (three.innerHTML === '<img src="/images/random/x.png">' && six.innerHTML === '<img src="/images/random/x.png">' && nine.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (three.innerHTML === '<img src="/images/random/o.jpg">' && six.innerHTML === '<img src="/images/random/o.jpg">' && nine.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (one.innerHTML === '<img src="/images/random/x.png">' && five.innerHTML === '<img src="/images/random/x.png">' && nine.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (one.innerHTML === '<img src="/images/random/o.jpg">' && five.innerHTML === '<img src="/images/random/o.jpg">' && nine.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
  else if (three.innerHTML === '<img src="/images/random/x.png">' && five.innerHTML === '<img src="/images/random/x.png">' && seven.innerHTML === '<img src="/images/random/x.png">'){
    alert('X is the Victor!');
    endGame();
  }
  else if (three.innerHTML === '<img src="/images/random/o.jpg">' && five.innerHTML === '<img src="/images/random/o.jpg">' && seven.innerHTML === '<img src="/images/random/o.jpg">'){
    alert('O is the Victor!');
    endGame();
  }
}

function endGame () {
  for (var i = 0; i < box.length; i++) {
    box[i].removeEventListener('click', addPicture);
    box[i].style.cursor = 'auto';
  }
}

var addPicture = function() {
  click += 1;
  if (click % 2 === 0)
    this.innerHTML = '<img src="/images/random/o.jpg">';

  else {
    this.innerHTML = '<img src="/images/random/x.png">';
  }
  this.removeEventListener('click', addPicture);
  this.style.cursor = 'auto';
  checkVictory();
};

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click', addPicture);
}
