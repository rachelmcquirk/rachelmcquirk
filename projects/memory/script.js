var totalAttempts = document.getElementById('attempts');
var totalMatches = document.getElementById('matches');
var accuracy = document.getElementById('accuracy');
var feedback = document.getElementById('feedback');

var cards = [
  {
    image: '/images/memory/butt.jpg'
  },
  {
    image: '/images/memory/derp.jpg'
  },
  {
    image: '/images/memory/doge.png'
  },
  {
    image: '/images/memory/glasses.jpg'
  },
  {
    image: '/images/memory/husky.jpg'
  },
  {
    image: '/images/memory/lol.jpg'
  },
  {
    image: '/images/memory/noidea.jpg'
  },
  {
    image: '/images/memory/nomdog.jpg'
  },
  {
    image: '/images/memory/samoyed.jpg'
  },
  {
    image: '/images/memory/sonny.jpg'
  },
  {
    image: '/images/memory/butt.jpg'
  },
  {
    image: '/images/memory/derp.jpg'
  },
  {
    image: '/images/memory/doge.png'
  },
  {
    image: '/images/memory/glasses.jpg'
  },
  {
    image: '/images/memory/husky.jpg'
  },
  {
    image: '/images/memory/lol.jpg'
  },
  {
    image: '/images/memory/noidea.jpg'
  },
  {
    image: '/images/memory/nomdog.jpg'
  },
  {
    image: '/images/memory/samoyed.jpg'
  },
  {
    image: '/images/memory/sonny.jpg'
  }
];

shuffle(cards);

var container = document.getElementById('container');
var html = '';

for(var i = 0; i < cards.length; i++) {
  html += '<img src="/images/memory/paw.jpg" class="dog">';
}
container.innerHTML = html;
var dog = document.querySelectorAll('.dog');

var guess = [];

if(!totalAttempts || isNaN(totalAttempts))
  attempt = 0;
if(!totalMatches || isNaN(totalMatches))
  match = 0;

var isPaused = false;

var onClick = function(i) {
  if (isPaused) {
    return;
  }

  dog[i].src = cards[i].image;
  guess.push(i);
  if (guess.length === 2) {
    attempt += 1;
    totalAttempts.innerHTML = 'Attempts: ' + attempt;
    var isMatch = dog[guess[0]].src === dog[guess[1]].src && guess[0] !== guess[1];
    if (isMatch) {
      match += 1;
      totalMatches.innerHTML = 'Matches: ' + match;
      if (match === 10) {
        var percentageAccuracy = Math.round((match / attempt) * 100);
        accuracy.innerHTML = 'Accuracy: ' + percentageAccuracy + '%';
        if (percentageAccuracy < 50)
          feedback.innerHTML = 'That\'s pretty terrible! <br><a href="http://rachelmcquirk.com/projects/memory/">Try again?</a>';
        else if (percentageAccuracy > 80)
          feedback.innerHTML = 'Wow, that\'s great! <br><a href="http://rachelmcquirk.com/projects/memory/">Think you can do even better?</a>';
        else
          feedback.innerHTML = 'That\'s pretty good, I bet you could do even better though ;). <br><a href="http://rachelmcquirk.com/projects/memory/">Shoot for the stars!</a>';
      }
    }
    else {
      (function(guess) {
        isPaused = true;
        setTimeout(function() {
          isPaused = false;
          dog[guess[0]].src = '/images/memory/paw.jpg';
          dog[guess[1]].src = '/images/memory/paw.jpg';
        }, 500);
      })(guess);
    }
    guess = [];
  }
};

for(var i = 0; i < dog.length; i++) {
  (function(i) {
    dog[i].addEventListener('click', function() {
      onClick(i);
    });
  })(i);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
