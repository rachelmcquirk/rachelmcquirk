var button = document.getElementById('button');

var buttonClick = function() {
  if(document.querySelectorAll('input:checked').length < 9)
    alert('Oops, looks like you haven\'t answered all of the questions!');

  var answers = {
  q1: document.querySelector('input[name="q1"]:checked').value,
  q2: document.querySelector('input[name="q2"]:checked').value,
  q3: document.querySelector('input[name="q3"]:checked').value,
  q4: document.querySelector('input[name="q4"]:checked').value,
  q5: document.querySelector('input[name="q5"]:checked').value,
  q6: document.querySelector('input[name="q6"]:checked').value,
  q7: document.querySelector('input[name="q7"]:checked').value,
  q8: document.querySelector('input[name="q8"]:checked').value,
  q9: document.querySelector('input[name="q9"]:checked').value,
  };

  var answerArray = [];
  for(var key in answers) {
    answerArray.push(answers[key]);
  }

  var answerCounter = {};
  for(var key in answers) {
  // if answerCounter[answers[key]] doesn't exist, set it to 0 before we try to add 1 to it
    if(!answerCounter[answers[key]]) {
      answerCounter[answers[key]] = 0;
    }
    answerCounter[answers[key]] += 1;
  }

  //need to store answercounter obj in an array
  var answerCounterArray = []
  for(var k in answerCounter) {
    answerCounterArray.push(answerCounter[k]);
  }

  // this creates an array of all of the keys in answerCounter
  var answerCounterKeys = Object.keys(answerCounter);

  // this gets the index highest number in the array
  var indexOfMostCommonAnswer = answerCounterArray.indexOf(Math.max.apply(Math, answerCounterArray));

  var mostCommonAnswer = answerCounterKeys[indexOfMostCommonAnswer];
  // ex: 'beach'

  var results = document.getElementById('results');

  if (mostCommonAnswer === 'beach') {
    results.innerHTML = '<h2>You got: Beach Vacation!</h1>' + '<p style="font-size: 20px; color:gray">You absolutely love the ocean and you know it! How could you not go on a beach vacation? Time for some R&R in the Caribbean.</p>' +
    '<img src="/images/quiz/beach2.jpg" id="img"><br>';
  }
  else if (mostCommonAnswer === 'culture') {
    results.innerHTML = '<h2>You got: Culture Rich Trip!</h1>' + '<p style="font-size: 20px; color:gray">You desire to learn about different cultures, their history, and their people. So go get a Rick Steve\'s travel guide and start planning for that trip that you\'ve been dreaming of!</p>' +
    '<img src="/images/quiz/traveler.jpg" id="img"><br>';
  }
  else if (mostCommonAnswer === 'backpacking') {
    results.innerHTML = '<h2>You got: Backpacking Trip!</h1>' + '<p style="font-size: 20px; color:gray">You\'re a natural explorer and your deep love of nature calls you to brave the rough conditions of the wilderness. Time to prepare for an amazing journey!</p>' +
    '<img src="/images/quiz/backpacking.jpg" id="img"><br>';
  }
  else if (mostCommonAnswer === 'roadtrip') {
    results.innerHTML = '<h2>You got: Roadtrip!</h1>' + '<p style="font-size: 20px; color:gray">You\'re the life of the party! You\'re always looking for a way to have fun and get away from the daily routine. What better way than to head out on the open road with some great friends?</p>' +
    '<img src="/images/quiz/roadtrip.jpg" id="img"><br>';
  }
  else if (mostCommonAnswer === 'disney') {
    results.innerHTML = '<h2>You got: Disney Vacation!</h1>' + '<p style="font-size: 20px; color:gray">You\'re a big kid at heart and a Disney vacation is the perfect way for you to have some fun and unwind!</p>' +
    '<img src="/images/quiz/disneyworld.jpg" id="img"><br>';
  }
};


button.addEventListener('click', buttonClick);
var toggleColor = function() {
  var radioEls = document.querySelectorAll('input[type=radio][name=' + this.name + ']');
  for(var i = 0; i < radioEls.length; i++) {
    if(radioEls[i].checked)
      radioEls[i].parentNode.parentNode.style.backgroundColor = 'rgba(66, 205, 136, 0.57)';
    else
      radioEls[i].parentNode.parentNode.style.backgroundColor = '#f2f2f2';
  }
};

var radios = document.querySelectorAll('input[type=radio]');

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', toggleColor);
}
