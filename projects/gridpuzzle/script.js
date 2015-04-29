var grid = document.getElementById('table');

var items = [
  {
    name: 'Name',
    options: ['Sally', 'Anne', 'Hansel', 'Bradley', 'Jordan']
  },
  {
    name: 'Color',
    options: ['Sally', 'Anne', 'Hansel', 'Bradley', 'Jordan']
  },
  {
    name: 'Fruit',
    options: ['Sally', 'Anne', 'Hansel', 'Bradley', 'Jordan']
  },
  {
    name: 'Activity',
    options: ['Sally', 'Anne', 'Hansel', 'Bradley', 'Jordan']
  },
  {
    name: 'Dog Breed',
    options: ['Sally', 'Anne', 'Hansel', 'Bradley', 'Jordan']
  }
];

var onClick = function() {
  var dropdown = this.querySelector('.dropdown');
  if (dropdown.style.display === 'block')
    dropdown.style.display = 'none';
  else
    dropdown.style.display = 'block';
};

var dropClick = function(value, innerDiv) {
  innerDiv.innerHTML = value;
};



for(var i = 0; i < items.length; i++) {
  var tr = document.createElement('tr');
  var item = items[i];

  for(var j = 0; j < 5; j++) {
    var td = document.createElement('td');
    var dropdownDiv = document.createElement('div');
    //  var listDiv[i] = document.createElement('div');

    var innerDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    dropdownDiv.className = 'dropdown';
    dropdownDiv.innerHTML = item.name;
    for(var z = 0; z < item.options.length; z++){
      var div = document.createElement('div');
      div.innerHTML = item.options[z];
      dropdownDiv.appendChild(div);
      (function(value, innerDiv) {
        div.addEventListener('click', function(e) {
          e.stopPropagation();
          dropClick(value, innerDiv);
        });
      })(item.options[z], innerDiv);
    }
    innerDiv.appendChild(dropdownDiv);
    innerDiv.addEventListener('click', onClick);
    td.appendChild(innerDiv);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
