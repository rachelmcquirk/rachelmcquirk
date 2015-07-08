var picture = document.getElementById('picture');
var adjective = document.getElementById('adjectives');
var endDiv = document.getElementById('end-div');

var adjectives = ['compassionate', 'intelligent', 'inspirational', 'sincere', 'fun', 'determined', 'loved', 'empathetic', 'beautiful', 'dorky', 'enlightened',
'devoted', 'virtuous', 'strong', 'thoughtful', 'humorous', 'cute', 'loyal', 'loving', 'good-hearted', 'my best friend'];
var colors = ['#f98561', '#ada1e2', '#2b91a0', '#59d9db', '#FC4129', '#6933d6', '#898bd6', '#a6e043', '#e05376', '#22e29c', '#f9a29f', '#f99111',
'#45efb4', '#6214E8', '#64f486', '#aa89ed', '#83e299', '#E83896', '#5bff9f', '#F49589', '#1B8FCB'];

var i = 10;

var onClick = function() {
  picture.removeEventListener('click', onClick);
  adjective.innerHTML = adjectives[i];
  adjective.style.color = colors[i];
  i++;

  var list = setInterval(function(){
    adjective.innerHTML = adjectives[i];
    adjective.style.color = colors[i];
    i++;
    if (i === adjectives.length) {
      clearInterval(list);
      endDiv.innerHTML= 'and I wouldn\'t have it any other way! <p>All of these things are part of what makes you so wonderful, ' +
      'I\'m sure I\'ve even missed out on a few of your other great qualities. There are just so many! I\'ve seen such tremendous growth ' +
      'in you over the years and I\'m excited for the places you are going in life - you deserve the absolute best. You are such a ' +
      'lovely person and I feel SO lucky that you are a part of my life! I really wish I could be there to celebrate you. Have a ' +
      'spectacular birthday with (most of) your loved ones! <3</p>';
      endDiv.style.opacity = '1';
    }
  }, 1200);
};


picture.addEventListener('click', onClick);
