var box = document.querySelectorAll('.box');
var click = 0;

var addPicture = function() {
  click += 1;
  console.log(click);
  if (click % 2 === 0)
    this.innerHTML = '<img src="/images/random/o.png">';
  else {
    this.innerHTML = '<img src="/images/random/x.png">';
  }
  this.removeEventListener('click', addPicture);
  this.style.cursor = 'auto';
};

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click', addPicture);
}
