var bunny = document.getElementById("bunny");
var clicks = 0;
bunny.style.height = window.innerHeight - 90 + "px";
var creepyArray = ["Don't do that.", "No Easter treats for you.", "You don't want to make Easter Bunny angry.", "...You'll regret this.", "I'll just be back to terrorize you next year.", "You can't hide from me!", "I know where you live!", ">=O", "ARRRGGGGHHH"];
var i = 0;
var creepy = document.getElementById("creepy");

var onClick = function() {
  clicks += 1;
  bunny.style.height = (parseInt(bunny.style.height) - 4) + "px";


  if(clicks % 6 === 0) {
    creepy.style.backgroundImage = "url(/images/random/speech.png)";
    creepy.innerHTML = "<p id='speech'>" + creepyArray[i] + "</p>";
    i += 1;
  }

  if(clicks === 58) {
    var head = document.querySelector("h1");
    var content = document.getElementById('content');
    var pic = document.getElementById('pic');
    creepy.style.backgroundImage = "";
    creepy.innerHTML = " ";
    head.innerHTML = "Yay, the creepy bunny is gone!";
    content.innerHTML = "";
    pic.innerHTML = "<img src='/images/random/happy.png'>";
  }
};

bunny.addEventListener("click", onClick);
