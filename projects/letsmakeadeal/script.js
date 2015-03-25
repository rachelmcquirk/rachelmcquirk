var orangeDoor = document.getElementById('orange');
var greenDoor = document.getElementById('green');
var blueDoor = document.getElementById('blue');

var firstClick = function() {
  var heading = document.getElementById('heading');
  var paragraph = document.getElementById('paragraph');
  if (this === orangeDoor) {
      heading.innerHTML = 'Ah, you chose the orange door!';
      paragraph.innerHTML = 'I have revealed that there is something truly horrendous behind the blue door. You can stick with ' +
      'your original choice of the orange door, or you can switch to the green door. Choose wisely...';
      blueDoor.innerHTML = '<img src="/images/joffrey.jpg" height="250" width="131">';
      blueDoor.removeEventListener('click', firstClick)

      var secondClick = function () {
        var playAgain = document.getElementById('playAgain');
        if (this === orangeDoor) {
          heading.innerHTML = 'You Lose!';
          paragraph.innerHTML = 'Oh, too bad! Here is your cringeworthy video.';
          greenDoor.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/m1EsDXSgVjA" frameborder="0" allowfullscreen></iframe>';
          blueDoor.innerHTML = "";
          orangeDoor.innerHTML = '';
          playAgain.innerHTML = '<a href="http://rachelmcquirk.com/projects/letsmakeadeal/index.html">Play Again?</a>';
        }
        else if (this === greenDoor) {
          heading.innerHTML = 'You Win!!!';
          paragraph.innerHTML = 'Yay! Press play to reveal your awesome video!';
          greenDoor.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6w2UxDdhZPk" frameborder="0" allowfullscreen></iframe>';
          blueDoor.innerHTML = "";
          orangeDoor.innerHTML = "";
          playAgain.innerHTML = '<a href="http://rachelmcquirk.com/projects/letsmakeadeal/index.html">Play Again?</a>';
        }
      };
      orangeDoor.addEventListener('click', secondClick);
      greenDoor.addEventListener('click', secondClick);
  }


  else if (this === greenDoor) {
    heading.innerHTML = 'You\'ve chosen the green door!';
    paragraph.innerHTML = 'I have revealed that there is something truly horrendous behind the orange door. You can stick with ' +
    'your original choice of the green door, or you can switch to the blue door. Choose wisely...';
    orangeDoor.innerHTML = '<img src="/images/joffrey.jpg" height="250" width="131">';
    orangeDoor.removeEventListener('click', firstClick)

    var secondClickG = function () {
      var playAgain = document.getElementById('playAgain');
      if (this === blueDoor) {
        heading.innerHTML = 'You Lose!';
        paragraph.innerHTML = 'That\'s unfortunate. Press play to reveal something cringeworthy.';
        greenDoor.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xYc4DT18EJg" frameborder="0" allowfullscreen></iframe>';
        blueDoor.innerHTML = '';
        orangeDoor.innerHTML = "";
        playAgain.innerHTML = '<a href="http://rachelmcquirk.com/projects/letsmakeadeal/index.html">Play Again?</a>';
      }
      else if (this === greenDoor) {
        heading.innerHTML = 'You Win!!!';
        paragraph.innerHTML = 'Yay! Press play to reveal your awesome video!';
        greenDoor.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6w2UxDdhZPk" frameborder="0" allowfullscreen></iframe>';
        blueDoor.innerHTML = "";
        orangeDoor.innerHTML = "";
        playAgain.innerHTML = '<a href="http://rachelmcquirk.com/projects/letsmakeadeal/index.html">Play Again?</a>';
        }
    };
    blueDoor.addEventListener('click', secondClickG);
    greenDoor.addEventListener('click', secondClickG);

  }


  else if (this === blueDoor) {
    heading.innerHTML = 'You picked the blue door, interesting choice!';
    paragraph.innerHTML = 'I have revealed that there is something truly horrendous behind the orange door. You can stick with ' +
    'your original choice of the blue door, or you can switch to the green door. Choose wisely...';
    orangeDoor.innerHTML = '<img src="/images/joffrey.jpg" height="250" width="131">';
    orangeDoor.removeEventListener('click', firstClick)

    var secondClickB = function () {
      var playAgain = document.getElementById('playAgain');
      if (this === blueDoor) {
        heading.innerHTML = 'You Lose!';
        paragraph.innerHTML = 'That\'s unfortunate. Press play to reveal something cringeworthy.';
        greenDoor.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xYc4DT18EJg" frameborder="0" allowfullscreen></iframe>';
        blueDoor.innerHTML = '';
        orangeDoor.innerHTML = "";
        playAgain.innerHTML = '<a href="http://rachelmcquirk.com/projects/letsmakeadeal/index.html">Play Again?</a>';
      }
      else if (this === greenDoor) {
        heading.innerHTML = 'You Win!!!';
        paragraph.innerHTML = 'Yay! Press play to reveal your awesome prize!';
        greenDoor.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6w2UxDdhZPk" frameborder="0" allowfullscreen></iframe>';
        blueDoor.innerHTML = "";
        orangeDoor.innerHTML = "";
        playAgain.innerHTML = '<a href="http://rachelmcquirk.com/projects/letsmakeadeal/index.html">Play Again?</a>';
      }
    };
    blueDoor.addEventListener('click', secondClickB);
    greenDoor.addEventListener('click', secondClickB);
  }
};


orangeDoor.addEventListener('click', firstClick);
greenDoor.addEventListener('click', firstClick);
blueDoor.addEventListener('click', firstClick);
