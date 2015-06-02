var wordArray = ['super', 'pancake', 'hangry', 'dolphin', 'anthropology', 'mermaid', 'snowflake', 'candle', 'kitchen', 'piano', 'harmonica', 'dragon', 'coffee', 'beach', 'pineapple', 'computer', 'vacation', 'oxygen', 'zephyr',
'symphony', 'heirarchy', 'diamond', 'peaceful', 'mountain', 'twinkle', 'spaceship', 'universe', 'elephant', 'circle', 'guitar', 'masquerade', 'thunder', 'evolution'];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

var word = document.getElementById('word');
var wordHtml = '';
for (var i = 0; i < randomWord.length; i++) {
  wordHtml += '<div class="blank">_ </div>';
}
word.innerHTML = wordHtml;

//splits the letters of the randomword string into it's own string array
var string = randomWord;
var result = string.split("");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var alphabetDiv = document.getElementById('alphabet');
var alphabetHtml = '';


for (var i = 0; i < alphabet.length; i++) {
  alphabetHtml += '<div class="letter">' + alphabet[i] + '</div>';
}

alphabetDiv.innerHTML = alphabetHtml;

var letter = document.querySelectorAll('.letter');
var blank = document.querySelectorAll('.blank');
var hangman = document.getElementById('hangman');
var hangmanArray = ['/images/random/man1.png', '/images/random/man2.png', '/images/random/man3.png', '/images/random/man4.png', '/images/random/man5.png','/images/random/man6.png', '/images/random/man7.png'];
var correctAnswer= 0;
var wrongAnswer = 0;

function check () {
  if (correctAnswer === result.length){
    isPaused = true;
    var winDiv = document.createElement('div');
    document.body.appendChild(winDiv);
    winDiv.className = 'win';

    var innerDiv = document.createElement('div');
    winDiv.appendChild(innerDiv);
    innerDiv.className = 'inner';
    innerDiv.innerHTML = '<h3>You won!</h3><h5><a href="http://rachelmcquirk.com/projects/hangman">Play Again?</a></h5>';
  }

  else if (wrongAnswer === 6 && correctAnswer < result.length) {
    isPaused = true;
    var loseDiv = document.createElement('div');
    document.body.appendChild(loseDiv);
    loseDiv.className = 'lose';

    var innerDiv = document.createElement('div');
    loseDiv.appendChild(innerDiv);
    innerDiv.className = 'inner';
    innerDiv.innerHTML = '<h3>You lost!</h3><h5><a href="http://rachelmcquirk.com/projects/hangman">Play Again?</a></h5>';
    for (var i = 0; i < result.length; i++) {
      if (blank[i].innerHTML !== result[i]) {
        blank[i].innerHTML = result[i];
        blank[i].style.color = 'red';
      }
    }
  }
};

var isPaused = false;

var onClick = function() {
  if (isPaused) {
    return;
  }

  var flag = false;
  for (var i = 0; i < result.length; i++) {
    if (this.innerHTML === result[i]) {
      correctAnswer += 1;
      blank[i].innerHTML = result[i];
      flag = true;
    }
  }
  if (flag === false) {
    wrongAnswer += 1;
    hangman.innerHTML = '<img src="' + hangmanArray[wrongAnswer] + '">';
  }

  check();

  this.style.backgroundColor = 'rgb(194, 197, 196)';
  this.style.border = '2px solid rgb(138, 140, 140)';
  this.style.cursor = 'auto';
  this.removeEventListener('click', onClick);
};

for (var i = 0; i < letter.length; i++) {
  letter[i].addEventListener('click', onClick, false);
}
