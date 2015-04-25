var button = document.querySelector('button');
var hint = document.getElementById('hint');
var guessesLeft = document.getElementById('turns');
var guess = document.getElementById('guess');
var number = Math.floor(Math.random() * 100);
console.log(number);
if(!turn || isNaN(turn))
  var turn = 6;

var compliment = ['Rexalent! That\'s right! I must say, you are looking very beautiful today.',
'Rexalent, that\'s right! If you were a dinosaur, you would be a FINOSAURUS!',
'Rex-a-licious, you got it! You have beautiful, long arms. I bet you can do a lot with those, I\'m envious.',
'Rex-a-licious, you got it! Are you an angel? Because I\'m a dinosaur.',
'Rexalent, that\'s right! By the way, you are such a wonderful person!',
'Rexalent, that\'s right! Yo\'re beautiful. You should come home with me, because I\'ll make you dino-sore.',
'Rex-a-licious, you got it! You\'re so smart, I wish my brain had the chance to evolve like yours.',
'Rex-a-licious, you got it! If I can\'t have you, I\'ll be a Tyrannosaurus Wreck.',
'Rexalent, that\'s right! One look at you and I feel like I\'ve died and gone to a museum.'
];

var isPaused = false;
var onClick = function() {
  if (isPaused) {
    return;
  }

  turn -= 1;
  if (guess.value > number) {
    hint.innerHTML = 'That number is too high!';
    guessesLeft.innerHTML = 'You have ' + turn + ' turns left.';
    if (turn === 0) {
      isPaused = true;
      guessesLeft.innerHTML = '';
      hint.innerHTML = 'You lose! The number was ' + number + '. Would you like to <a href="http://www.rachelmcquirk.com/projects/guessthenumber">play again?</a>';
    }
  }
  else if (guess.value < number) {
    hint.innerHTML = 'That number is too low!';
    guessesLeft.innerHTML = 'You have ' + turn + ' turns left.';
    if (turn === 0) {
      isPaused = true;
      guessesLeft.innerHTML = '';
      hint.innerHTML = 'You lose! The number was ' + number + '. Would you like to <a href="http://www.rachelmcquirk.com/projects/guessthenumber">play again?</a>';
    }
  }
  else {
    var randomCompliment = compliment[Math.floor(Math.random() * compliment.length)];
    hint.style.fontSize = '16px';
    hint.innerHTML = randomCompliment;
    guessesLeft.innerHTML = '<a href="http://www.rachelmcquirk.com/projects/guessthenumber">Play again</a>?';
    isPaused = true;
  }
};



button.addEventListener('click', onClick);
