
var button = document.getElementById('button');

var buttonClick = function() {
  var story = document.getElementById('story');

  var wordEls = document.querySelectorAll('.word');

  var wordArray = []

  for(var i = 0; i < wordEls.length; i++) {
    wordArray.push(wordEls[i].value);
    }

  story.innerHTML = 'A few nights ago, my friend <strong>' + wordArray[0] + '</strong>, was a little <strong>' + wordArray[1] + '</strong> at the <strong>' + wordArray[2] +
    '</strong> party. <strong>' + wordArray[0] + '</strong> had a little too much to drink and began to <strong>' + wordArray[3] + '</strong> with some <strong>' + wordArray[4] +
    '</strong>. My other friend, <strong>' + wordArray[5] + '</strong> tried to intervene by taking away <strong>' + wordArray[0] + '\'s</strong> <strong>' + wordArray[6] +
    '</strong>. The party got too <strong>' + wordArray[7] + '</strong>, so I <strong>' + wordArray[8] + '</strong> to another party in <strong>' + wordArray[9] +
    '</strong>. Once I got there, I noticed that <strong>' + wordArray[10] + '</strong> was there! I couldn\'t believe it! <strong>' + wordArray[10] +
    '</strong> was <strong>' + wordArray[11] + '</strong> a <strong>' + wordArray[12] + '</strong>! <strong>' + wordArray[10] + '</strong> became my hero that night and I decided to become a <strong>' + wordArray[13] +
    '</strong>.'
  };




button.addEventListener('click', buttonClick);
