var myDataRef = new Firebase('https://gif-poll.firebaseIO.com');

var voteArr = [];
var totalVotes = null;
var poll = document.getElementById('poll');
var html = '';
var button = document.querySelector('button');
var choices = ["/images/random/cuddle.gif", "/images/random/circle.gif", "/images/random/cheerio.gif"];

myDataRef.on('value', function(snapshot){
  voteArr = snapshot.val() || [];
  totalVotes = 0;
  for (var i = 0; i < voteArr.length; i++) {
    totalVotes += voteArr[i];
  }
});

for (var i = 0; i < choices.length; i++) {
  var choice = choices[i];
  html +=
    "<li class= 'list'>" +
      "<label class= 'answer'>" +
        "<div class='image-answer'>" +
          "<img src='" + choice + "' width='180' height='180'>" +
        "</div>" +
        "<input type='radio' name='q1' value='" + i + "'>" +
      "</label>" +
      "<div class='percent'></div>" +
    "</li>";
}

poll.innerHTML = html;

var save = function() {
  myDataRef.set(voteArr);
};

var buttonClick = function() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].removeEventListener('change', toggleColor);
  }
  var radioEls = document.querySelectorAll('input[type=radio][name="q1"]');
  for (var z = 0; z < radios.length; z++) {
    radioEls[z].disabled = true;
  }
  button.removeEventListener('click', buttonClick);

  var answer = document.querySelector('input[name="q1"]:checked').value;

  if (!voteArr[answer])
    voteArr[answer] = 0;
  voteArr[answer] += 1;
  totalVotes += 1;
  if (document.querySelectorAll('input:checked').length < 1)
    alert('Oops, looks like you haven\'t answered the question!');

  var percentDivs = document.querySelectorAll('.percent');
  for (var j = 0; j < choices.length; j++) {
    if (!voteArr[j])
      voteArr[j] = 0;
    var percent = Math.round((voteArr[j] / totalVotes) * 100);
    percentDivs[j].innerHTML = percent + '%';
  }
  save();
};

button.addEventListener('click', buttonClick);

var toggleColor = function() {
  var radioEls = document.querySelectorAll('input[type=radio][name="q1"]');
  for(var i = 0; i < radioEls.length; i++) {
    if(radioEls[i].checked)
      radioEls[i].parentNode.style.backgroundColor = 'rgba(66, 205, 136, 0.57)';
    else
      radioEls[i].parentNode.style.backgroundColor = '#f2f2f2';
  }
};

var radios = document.querySelectorAll('input[type=radio]');

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', toggleColor);
}
