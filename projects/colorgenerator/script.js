var message = document.getElementById('message');

var button = document.getElementById('button');

var response = ['My, what a beautiful color!', 'Perhaps I\'ll paint my walls this color.', 'Gorgeous!', 'I came for the pretty colors.', 'Sweet background color.', 'Bellissima!', ':D', 'I\'ll just take this hex code...'];

var buttonClick = function() {
  var body = document.querySelector('body');

  var number = randomColor();

  body.style.backgroundColor = randomColor();

  message.innerHTML = response[Math.floor(Math.random() * response.length)] + '<br>';
  message.innerHTML += number;
};

button.addEventListener('click', buttonClick);
