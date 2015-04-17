var counter = document.getElementById('counter');
var cupcake = document.getElementById('cupcake');
var clicks = parseInt(localStorage.getItem('savedClicks'));
var totalClicks = parseInt(localStorage.getItem('totalClicks'));

var cost1 = document.getElementById('cost1');
var cost2 = document.getElementById('cost2');
var cost3 = document.getElementById('cost3');

var grandma = document.getElementById('grandma');
var truck = document.getElementById('truck');
var bakery = document.getElementById('bakery');

var gmaNumb = document.getElementById('gmaNumb');
var truckNumb = document.getElementById('truckNumb');
var bakeryNumb = document.getElementById('bakeryNumb');

var gmaInfo = document.getElementById('gma-info');
var truckInfo = document.getElementById('truck-info');
var bakeryInfo = document.getElementById('bakery-info');
var news = document.getElementById('news');

counter.innerHTML = clicks + ' Cupcakes';
if(!totalClicks || isNaN(totalClicks))
  totalClicks = 0;
if(!clicks || isNaN(clicks))
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

if(userUpgrades.grandma > 0)
  addGmaInfo();
if(userUpgrades.truck > 0)
  addTruckInfo();
if(userUpgrades.bakery > 0)
  addBakeryInfo();

var shop = JSON.parse(localStorage.getItem('shop'));
if (!shop) {
  var shop = {
    grandma: {
      cost: 100
    },
    truck: {
      cost: 500
    },
    bakery: {
      cost: 3000
    }};
}

cost1.innerHTML = '<img src="/images/cupcake/mini.svg" height="25">' + shop.grandma.cost;
cost2.innerHTML = '<img src="/images/cupcake/mini.svg" height="25">' + shop.truck.cost;
cost3.innerHTML = '<img src="/images/cupcake/mini.svg" height="25">' + shop.bakery.cost;

var updateClickCount = function(amount) {
  clicks = clicks + amount;
  if (amount > 0)
    totalClicks = totalClicks + amount;
  localStorage.setItem('savedClicks', clicks);
  localStorage.setItem('totalClicks', totalClicks);
  counter.innerHTML = clicks + ' Cupcakes';
  localStorage.setItem('userUpgrades', JSON.stringify(userUpgrades));
  localStorage.setItem('shop', JSON.stringify(shop));
};

var cupcakeClick = function() {
  updateClickCount(1);
};

cupcake.addEventListener('click', cupcakeClick);

setInterval(function() {
  updateClickCount(1 * userUpgrades.grandma);
}, 2000);

function addGmaInfo() {
  gmaInfo.classList.add("info");
  //gmaInfo.style.backgroundImage = 'url(/images/cupcake/cupcake1.png)';
  gmaInfo.innerHTML = 'Grandma: a cute old lady to help you bake cupcakes. Each produces 1 cupcake per second.' +
  '<p class="stat">You have <span style="color:rgb(127, 125, 137)">' + userUpgrades.grandma + '</span> grandmas producing <span style="color:rgb(127, 125, 137)">' + userUpgrades.grandma + '</span> cupcakes every second.</p>';
}

var onGma = function() {
 if (clicks > shop.grandma.cost) {
   updateClickCount(- shop.grandma.cost);
   userUpgrades.grandma += 1;
   shop.grandma.cost = Math.round(shop.grandma.cost * 1.2);
   gmaNumb.innerHTML = userUpgrades.grandma;
   cost1.innerHTML = '<img src="/images/cupcake/mini.svg" height="25">' + shop.grandma.cost;
   addGmaInfo();
}
 else {
   alert('It will take more cupcakes than that to win Grandma over!');
 }
};

setInterval(function() {
 updateClickCount(4 * userUpgrades.truck);
}, 1000);

function addTruckInfo() {
  truckInfo.classList.add("info");
  truckInfo.style.backgroundImage = 'url(/images/cupcake/dots.png)';
  truckInfo.innerHTML = 'Truck: An awesome cupcake truck for all the kids to buy your cupcakes from. Each produces 4 cupcakes per second.' +
  '<p class="stat">You have <span style="color:rgb(121, 49, 145)">' + userUpgrades.truck + '</span> trucks producing <span style="color:rgb(121, 49, 145)">' + (userUpgrades.truck * 4) + '</span> cupcakes every second.</p>';
}

var onTruck = function() {
  if (clicks > shop.truck.cost) {
    updateClickCount(- shop.truck.cost);
    userUpgrades.truck += 1;
    shop.truck.cost = Math.round(shop.truck.cost * 1.25);
    truckNumb.innerHTML = userUpgrades.truck;
    cost2.innerHTML = '<img src="/images/cupcake/mini.svg" height="25">' + shop.truck.cost;
    addTruckInfo();
  }
  else {
    alert('You need more cupcakes for a cupcake truck...keep baking.');
  }
};

setInterval(function() {
  updateClickCount(10 * userUpgrades.bakery);
}, 1000);

function addBakeryInfo() {
  bakeryInfo.classList.add("info");
  //bakeryInfo.style.backgroundImage = 'url(/images/cupcake/cupcake1.png)';
  bakeryInfo.innerHTML = 'Bakery: Baking larger quantities of cupcakes, putting all of the grandmas to shame. Each produces 10 cupcakes per second.' +
  '<p class="stat">You have <span style="color:rgb(127, 125, 137)">' + userUpgrades.bakery + '</span> bakeries producing <span style="color:rgb(127, 125, 137)">' + (userUpgrades.bakery * 10) + '</span> cupcakes every second.</p>';
}

var onBakery = function() {
  if (clicks > shop.bakery.cost) {
    updateClickCount(- shop.bakery.cost);
    userUpgrades.bakery += 1;
    shop.bakery.cost = Math.round(shop.bakery.cost * 1.3);
    bakeryNumb.innerHTML = userUpgrades.bakery;
    cost3.innerHTML = '<img src="/images/cupcake/mini.svg" height="25">' + shop.bakery.cost;
    addBakeryInfo();
  }
  else {
    alert('Looks like you don\'t have enough cupcakes to open a Bakery.');
  }
};

grandma.addEventListener('click', onGma);
truck.addEventListener('click', onTruck);
bakery.addEventListener('click', onBakery);

var newsArray = ['You want to bake cupcakes and decorate them, but no one really wants to eat them', '"Get to work on those cupcakes!" -grandma', 'You\'re baking very slowly'];
var newsArray1 = ['You learned how to decorate with frosting', 'You\'re making great progress', 'The dog is even starting to like your cupcakes...'];
var newsArray2 = ['Your neighbors are starting to offer you money for your delicious cupcakes', '"We\'re so proud of you" -grandma', 'News: This just in, Cupcakes are WAY cooler than cookies!'];
var newsArray3 = ['The whole city is talkig about your amazing cupcakes', 'Grandma is experimenting with different flavors', 'Cupcake Wars has requested you to be on their show', '10 missed calls from grandma'];
var newsArray4 = ['Don\'t push grandma too hard...', 'News: Doctors recommend one serving of upcakes daily', '"Cupcakes helped me lose weight" -Oprah', 'Your new Vanilla-Bacon Swirl flavor is the top selling cupcake!'];


var i = 0;

var newsFeed = function() {
  console.log(totalClicks);
  if (totalClicks < 110) {
    news.innerHTML = newsArray[i];
    i++;
    if (i === newsArray.length)
     i = 0;
  }
  else if (110 < totalClicks && totalClicks < 800) {
    news.innerHTML = newsArray1[i];
    i++;
    if (i === newsArray1.length)
     i = 0;
  }
  else if (800 < totalClicks && totalClicks < 3000) {
    news.innerHTML = newsArray2[i];
    i++;
    if (i === newsArray2.length)
     i = 0;
  }
  else if (3000 < totalClicks && totalClicks < 8000) {
    news.innerHTML = newsArray3[i];
    i++;
    if (i === newsArray3.length)
     i = 0;
  }
  else if (8000 < totalClicks) {
    news.innerHTML = newsArray4[i];
    i++;
    if (i === newsArray4.length)
     i = 0;
  }
};

setInterval(newsFeed, 10000);
newsFeed();
