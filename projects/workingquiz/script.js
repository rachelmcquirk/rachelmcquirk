var button = document.getElementById('button');

var buttonClick = function() {
  if(document.querySelectorAll('input:checked') < 11)
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

  if (mostCommonAnswer === 'beach') {
  document.body.innerHTML = 'You need a beach vacation!';
  }
  else if (mostCommonAnswer === 'culture') {
    document.body.innerHTML = 'You need to explore a foreign country!';
  }
  else if (mostCommonAnswer === 'backpacking') {
    document.body.innerHTML = 'You need to go on a backpacking trip!';
  }
  else if (mostCommonAnswer === 'roadtrip') {
    document.body.innerHTML = 'You need to go on a roadtrip!';
  }
  else if (mostCommonAnswer === 'disney') {
    document.body.innerHTML = 'You need to go to Disney World!';
  }
};


button.addEventListener('click', buttonClick);
