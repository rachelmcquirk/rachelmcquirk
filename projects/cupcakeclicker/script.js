var counter = document.getElementById('counter');
var cupcake = document.getElementById('cupcake');
var clicks = parseInt(localStorage.getItem('savedClicks'));
var grandma = document.getElementById('grandma');
var truck = document.getElementById('truck');
var bakery = document.getElementById('bakery');

if(!clicks)
  clicks = 0;
counter.innerHTML = clicks + ' Cupcakes';


var cupcakeClick = function() {
  clicks = clicks +=1;
  counter.innerHTML = clicks + ' Cupcakes';
  localStorage.setItem('savedClicks', clicks);
};

cupcake.addEventListener('click', cupcakeClick);

var onGma = function() {
  if (clicks > 100) {

  }
  else
  {
    return 'You don\'t have enough cupcakes for that';
  }
};



grandma.addEventListener('click', onGma);
