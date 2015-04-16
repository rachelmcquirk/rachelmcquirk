var counter = document.getElementById('counter');
var cupcake = document.getElementById('cupcake');
var clicks = parseInt(localStorage.getItem('savedClicks'));

var grandma = document.getElementById('grandma');
var truck = document.getElementById('truck');
var bakery = document.getElementById('bakery');

var gmaNumb = document.getElementById('gmaNumb');
var truckNumb = document.getElementById('truckNumb');
var bakeryNumb = document.getElementById('bakeryNumb');

counter.innerHTML = clicks + ' Cupcakes';

if(!clicks)
  clicks = 0;

var userUpgrades = JSON.parse(localStorage.getItem('userUpgrades'));
if (!userUpgrades) {
  userUpgrades = {
  grandma: 0,
  truck: 0,
  bakery: 0
};
}

gmaNumb.innerHTML = userUpgrades.grandma;
truckNumb.innerHTML = userUpgrades.truck;
bakeryNumb.innerHTML = userUpgrades.bakery;

var updateClickCount = function(amount) {
  clicks = clicks + amount;
  localStorage.setItem('savedClicks', clicks);
  counter.innerHTML = clicks + ' Cupcakes';
  localStorage.setItem('userUpgrades', JSON.stringify(userUpgrades));
};

var cupcakeClick = function() {
  updateClickCount(1);
};

cupcake.addEventListener('click', cupcakeClick);

var shop = {
  grandma: {
    cost: 100,
    add: 1
  },
  truck: {
    cost: 500,
    add: 5
  },
  bakery: {
    cost: 3000,
    add: 20
  }};


setInterval(function() {
  updateClickCount(1 * userUpgrades.grandma);
}, 1000);

var onGma = function() {
 if (clicks > 100) {
   updateClickCount(-100);
   userUpgrades.grandma += 1;
   gmaNumb.innerHTML = userUpgrades.grandma;
 }
 else {
   alert('It will take more cupcakes than that to win Grandma over!');
 }
};

setInterval(function() {
 updateClickCount(5 * userUpgrades.truck);
}, 1000);

var onTruck = function() {
  if (clicks > 500) {
    updateClickCount(-500);
    userUpgrades.truck += 1;
    truckNumb.innerHTML = userUpgrades.truck;
  }
  else {
    alert('You need 500 cupcakes for a cupcake truck...keep baking.');
  }
};

setInterval(function() {
  updateClickCount(10 * userUpgrades.bakery);
}, 1000);

var onBakery = function() {
  if (clicks > 3000) {
    updateClickCount(-3000);
    userUpgrades.bakery += 1;
    bakeryNumb.innerHTML = userUpgrades.bakery;
  }
  else {
    alert('Looks like you don\'t have enough cupcakes to open a Bakery.');
  }
};

grandma.addEventListener('click', onGma);
truck.addEventListener('click', onTruck);
bakery.addEventListener('click', onBakery);
