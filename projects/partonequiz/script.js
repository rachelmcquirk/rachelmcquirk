var button = document.getElementById('button');

var buttonClick = function() {
  if(document.querySelectorAll('input:checked') < 9)
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

  var message = document.getElementById('message');
  for(var key in answers) {
    message.innerHTML += answers[key] + " ";
  }
};


button.addEventListener('click', buttonClick);
