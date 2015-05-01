var grid = document.getElementById('table');

var choices = {
  name: [
    {
      value: 'Anne',
      image: '/images/grid/a.jpg'
    },
    {
      value: 'Bradley',
      image: '/images/grid/b.jpg'
    },
    {
      value: 'Hansel',
      image: '/images/grid/h.jpg'
    },
    {
      value: 'Jordan',
      image: '/images/grid/j.jpg'
    },
    {
      value: 'Sally',
      image: '/images/grid/s.jpg'
    },
  ],
  color: [
    {
      value: 'Blue',
      image: '/images/grid/blue.jpg'
    },
    {
      value: 'Green',
      image: '/images/grid/green.jpg'
    },
    {
      value: 'Orange',
      image: '/images/grid/orange.jpg'
    },
    {
      value: 'Pink',
      image: '/images/grid/pink.jpg'
    },
    {
      value: 'Red',
      image: '/images/grid/red.jpg'
    },
  ],
  fruit: [
    {
      value: 'Apple',
      image: '/images/grid/apple.jpg'
    },
    {
      value: 'Coconut',
      image: '/images/grid/coconut.jpg'
    },
    {
      value: 'Mango',
      image: '/images/grid/mango.jpg'
    },
    {
      value: 'Pineapple',
      image: '/images/grid/pineapple.jpg'
    },
    {
      value: 'Strawberry',
      image: '/images/grid/strawberry.jpg'
    },
  ],
  activity: [
    {
      value: 'Hiking',
      image: '/images/grid/hiking.jpg'
    },
    {
      value: 'Snowboarding',
      image: '/images/grid/snow.jpg'
    },
    {
      value: 'Tennis',
      image: '/images/grid/tennis.jpg'
    },
    {
      value: 'Weight Lifting',
      image: '/images/grid/lifting.jpg'
    },
    {
      value: 'Yoga',
      image: '/images/grid/yoga.jpg'
    },
  ],
  breed: [
    {
      value: 'Cat',
      image: '/images/grid/cat.jpg'
    },
    {
      value: 'Husky',
      image: '/images/grid/husky.jpg'
    },
    {
      value: 'Samoyed',
      image: '/images/grid/samoyed.jpg'
    },
    {
      value: 'Sheltie',
      image: '/images/grid/sheltie.jpg'
    },
    {
      value: 'Aust. Shepherd',
      image: '/images/grid/shep.jpg'
    },
  ]
};

var items = [
  [
    {
      name: 'Name',
      options: choices.name,
      correctAnswer: 'Hansel',
      isCorrect: ''
    },
    {
      name: 'Name',
      options: choices.name,
      correctAnswer: 'Jordan',
      isCorrect: ''
    },
    {
      name: 'Name',
      options: choices.name,
      correctAnswer: 'Anne',
      isCorrect: ''
    },
    {
      name: 'Name',
      options: choices.name,
      correctAnswer: 'Bradley',
      isCorrect: ''
    },
    {
      name: 'Name',
      options: choices.name,
      correctAnswer: 'Sally',
      isCorrect: ''
    }
  ],
  [
    {
      name: 'Color',
      options: choices.color,
      correctAnswer: 'Green',
      isCorrect: ''
    },
    {
      name: 'Color',
      options: choices.color,
      correctAnswer: 'Blue',
      isCorrect: ''
    },
    {
      name: 'Color',
      options: choices.color,
      correctAnswer: 'Pink',
      isCorrect: ''
    },
    {
      name: 'Color',
      options: choices.color,
      correctAnswer: 'Orange',
      isCorrect: ''
    },
    {
      name: 'Color',
      options: choices.color,
      correctAnswer: 'Red',
      isCorrect: ''
    }
  ],
  [
    {
      name: 'Fruit',
      options: choices.fruit,
      correctAnswer: 'Apple',
      isCorrect: ''
    },
    {
      name: 'Fruit',
      options: choices.fruit,
      correctAnswer: 'Mango',
      isCorrect: ''
    },
    {
      name: 'Fruit',
      options: choices.fruit,
      correctAnswer: 'Pineapple',
      isCorrect: ''
    },
    {
      name: 'Fruit',
      options: choices.fruit,
      correctAnswer: 'Strawberry',
      isCorrect: ''
    },
    {
      name: 'Fruit',
      options: choices.fruit,
      correctAnswer: 'Coconut',
      isCorrect: ''
    }
  ],
  [
    {
      name: 'Activity',
      options: choices.activity,
      correctAnswer: 'Yoga',
      isCorrect: ''
    },
    {
      name: 'Activity',
      options: choices.activity,
      correctAnswer: 'Weight Lifting',
      isCorrect: ''
    },
    {
      name: 'Activity',
      options: choices.activity,
      correctAnswer: 'Hiking',
      isCorrect: ''
    },
    {
      name: 'Activity',
      options: choices.activity,
      correctAnswer: 'Tennis',
      isCorrect: ''
    },
    {
      name: 'Activity',
      options: choices.activity,
      correctAnswer: 'Snowboarding',
      isCorrect: ''
    }
  ],
  [
    {
      name: 'Pet',
      options: choices.breed,
      correctAnswer: 'Husky',
      isCorrect: ''
    },
    {
      name: 'Pet',
      options: choices.breed,
      correctAnswer: 'Cat',
      isCorrect: ''
    },
    {
      name: 'Pet',
      options: choices.breed,
      correctAnswer: 'Sheltie',
      isCorrect: ''
    },
    {
      name: 'Pet',
      options: choices.breed,
      correctAnswer: 'Aust. Shepherd',
      isCorrect: ''
    },
    {
      name: 'Pet',
      options: choices.breed,
      correctAnswer: 'Samoyed',
      isCorrect: ''
    }
  ]
];




var dropClick = function(image, nameDiv, correctAnswer, itemValue, i, j, z) {
  nameDiv.innerHTML = '<img src="' + image + '">';
  if (itemValue === correctAnswer) {
    items[i][j].isCorrect = true;
  }
  else {
    items[i][j].isCorrect = false;
  }
};


//loops through item number and adds table
for(var i = 0; i < items.length; i++) {
  var tr = document.createElement('tr');

  var cells = items[i];

  //iterates over every cell in the current row and creates a corresponding td that
  //contains an inner div and a dropdown div with 5 options
  for(var j = 0; j < cells.length; j++) {
    var item = cells[j];
    var td = document.createElement('td');

    var innerDiv = document.createElement('div');
    var nameDiv = document.createElement('div');
    var dropdownDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    dropdownDiv.className = 'dropdown';
    nameDiv.innerHTML = item.name;

    //iterates over the array of choices and creates a div for each choice in each item
    for(var z = 0; z < item.options.length; z++){
      var div = document.createElement('div');
      div.className = 'itemBorder';
      div.innerHTML = item.options[z].value;
      dropdownDiv.appendChild(div);
      // self-executing anonymous function
      //this makes it so the values that is selected isn't always the last one in the loop
      (function(image, nameDiv, correctAnswer, itemValue, i, j, z) {
        div.addEventListener('click', function(e) {
          dropClick(image, nameDiv, correctAnswer, itemValue, i, j, z);
        });
      })(item.options[z].image, nameDiv, item.correctAnswer, item.options[z].value, i, j, z);
    }
    innerDiv.appendChild(dropdownDiv);
    innerDiv.appendChild(nameDiv);
    td.appendChild(innerDiv);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

var guess = document.getElementById('guess');
var button = document.querySelector('button');
var response = document.getElementById('response');
var count = 0;


//response upon completeing the grid and answering the question correctly
var onEnter = function() {
  for (var k = 0; k < items.length; k++) {
    var cells = items[k];
    for(var j = 0; j < cells.length; j++) {
      var item = cells[j];
      if (item.isCorrect === true) {
        count += 1;
      }
    }
  }
  var answer = guess.value.toUpperCase();
  if (count === 25 && answer === 'BRADLEY') {
    response.innerHTML = 'Correct! Congrats, you\'ve got some mad problem solving skills!';
  }
  else {
    response.innerHTML = 'That\'s not quite right, make sure you have filled in the grid  and answered the question correctly.';
  }
  count = 0;
};

button.addEventListener('click', onEnter);

//striking through the hints
var strike = document.querySelectorAll('.strike');

var strikeThrough = function() {
  if (this.style.textDecoration === 'line-through') {
    this.style.textDecoration = 'none';
    this.style.color = 'black';
  }
  else {
    this.style.textDecoration = 'line-through';
    this.style.color = 'red';
  }
};

for (var i = 0; i < strike.length; i++) {
    strike[i].addEventListener('click', strikeThrough, false);
}
