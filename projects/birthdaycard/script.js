var picture = document.getElementById('picture');
var adjective = document.getElementById('adjectives');
var endDiv = document.getElementById('end-div');

var adjectives = ['caring', 'intelligent', 'inspirational', 'sincere', 'determined', 'loved', 'empathetic', 'beautiful', 'dorky', 'enlightened',
'devoted', 'virtuous', 'thoughtful', 'humorous', 'cute', 'loyal', 'loving', 'good-hearted', 'my best friend'];
var colors = ['#f98561', '#ada1e2', '#2b91a0', '#59d9db', '#E21837', '#6933d6', '#a6e043', '#e05376', '#22e29c', '#f9a29f', '#f99111',
'#45efb4', '#64f486', '#aa89ed', '#83e299', '#E83896', '#5bff9f', '#1B8FCB', '#F49589'];

var i = 0;

var onClick = function() {
  picture.removeEventListener('click', onClick);
  adjective.innerHTML = adjectives[i];
  adjective.style.color = colors[i];
  endDiv.innerHTML= 'and I wouldn\'t have it any other way!';
  i++;

  var list = setInterval(function(){
    adjective.innerHTML = adjectives[i];
    adjective.style.color = colors[i];
    i++;
    endDiv.innerHTML= 'and I wouldn\'t have it any other way!';
    if (i === adjectives.length) {
      clearInterval(list);
    }
  }, 1200);
};


picture.addEventListener('click', onClick);
