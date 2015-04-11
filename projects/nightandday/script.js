var circle = document.getElementById('circle');
var sky = document.getElementById('sky');
var early = document.getElementById('early');
var late = document.getElementById('late');
var p = document.querySelector('p');


var onClick = function() {
  stopSound();
  if (circle.classList.contains('sun')) {
    circle.classList.remove('sun');
    circle.classList.add('moon');
    p.innerHTML = 'Hover over the moon for night-time sounds.';
    p.style.color = 'white';
  }
  else {
    circle.classList.remove('moon');
    circle.classList.add('sun');
    p.innerHTML = 'Hover over the sun for day-time sounds.';
    p.style.color = 'black';
  }

  if (sky.classList.contains('day')) {
    sky.classList.remove('day');
    sky.classList.add('night');
  }
  else {
    sky.classList.remove('night');
    sky.classList.add('day');
  }

  if (spot1.classList.contains('visible')) {
    spot1.classList.remove('visible');
  }
  else {
    spot1.classList.add('visible');
  }

  if (spot2.classList.contains('visible')) {
    spot2.classList.remove('visible');
  }
  else {
    spot2.classList.add('visible');
  }

  if (spot3.classList.contains('visible')) {
    spot3.classList.remove('visible');
  }
  else {
    spot3.classList.add('visible');
  }
};

function playSound() {
  if(circle.classList.contains('sun')) {
    early.play();
  }
  else {
    late.play();
  }
}

function stopSound(soundobj) {
  if(circle.classList.contains('sun')) {
    early.pause();
    early.currentTime = 0;
  }
  else {
    late.pause();
    late.currentTime = 0;
  }
}

circle.addEventListener('mouseover', playSound);
circle.addEventListener('mouseout', stopSound);
document.body.addEventListener('click', onClick);
