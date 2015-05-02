var button = document.querySelector('button');

var passageArray = [
'A selfie is a self-portrait photograph, typically taken with a hand-held digital camera or camera phone. ' +
'Selfies are often shared on social networking services such as Facebook, Google+, Instagram, Snapchat, Tumblr and Twitter. They are usually ' +
'flattering and made to appear casual. Most selfies are taken with a camera held at arm\'s length or pointed at a mirror, rather than by using a self-timer. ' +
'The appeal of selfies comes from how easy they are to create and share, and the control they give self-photographers over how they present themselves.' +
'Many selfies are intended to present a flattering image of the person, especially to friends whom the photographer expects to be supportive. However, a 2013 ' +
'study of Facebook users found that posting photos of oneself correlates with lower levels of social support from and intimacy with Facebook friends (except ' +
'for those marked as Close Friends). The lead author of the study suggests that "those who frequently post photographs on Facebook risk damaging real-life ' +
'relationships." The photo messaging application Snapchat is also largely used to send selfies. Some users of Snapchat choose to send ' +
'intentionally-unattractive selfies to their friends for comedic purposes. Posting intentionally unattractive selfies has also become common in the early ' +
'2010s, in part for their humor value, but in some cases also to explore issues of body image or as a reaction against the perceived narcissism or ' +
'over-sexualization of typical selfies.',

'Bro is a male youth subculture of "conventional guys\' guys" who spend time partying in ways similar to each other. Although the popular image of bro ' +
'lifestyle is associated with sports apparel and fraternities, it lacks a consistent definition. Some aspects vary regionally such as in California where ' +
'it overlaps with surf culture. Oxford Dictionaries have noted that bros frequently self-identify with neologisms containing the word "bro" as a prefix or ' +
'suffix. A similar subculture, brogrammer (portmanteau of bro and programmer), is a term thought to describe a macho programmer - A programmer who breaks ' +
'the usual expectations of quiet nerdiness and opts instead for the usual trappings of a frat-boy: popped collars, bad beer, and calling everybody "bro". ' +
'Despised by everyone, especially other programmers. Oxford Dictionaries identifies bros eponymously as those who themselves use the word to refer to ' +
'others, such as in the example of "don\'t tase me, bro", in which the taser is not a bro, but the tased is. The subculture is not defined consistently ' +
'or concretely, but refers to a type of "fratty masculinity", predominantly "if not exclusively" white, associated with frayed-brim baseball hats, oxford ' +
'shirts, sports team t-shirts, cargo shorts, and boat shoes or sandals. NPR also noted that bros could include people of color and women, though that is ' +
'not the popular conception of bro subculture.',

'The hipster subculture typically consists of white millennials living in urban areas. The subculture has been described as a "mutating, trans-Atlantic ' +
'melting pot of styles, tastes and behavior" and is broadly associated with indie and alternative music, a varied non-mainstream fashion sensibility ' +
'(including vintage and thrift store-bought clothes), generally progressive political views, organic and artisanal foods, and alternative lifestyles. ' +
'Hipsters are typically described as affluent or middle class young Bohemians who reside in gentrifying neighborhoods. The term in its current usage first ' +
'appeared in the 1990s and became particularly prominent in the 2010s, being derived from the term used to describe earlier movements in the 1940s. Members ' +
'of the subculture typically do not self-identify as hipsters, and the word hipster is often used as a pejorative to describe someone who is pretentious, ' +
'overly trendy or effete. Some analysts contend that the notion of the contemporary hipster is actually a myth created by marketing. In a Huffington Post ' +
'article entitled "Who\'s a Hipster?", Julia Plevin argues that the "definition of hipster remains opaque to anyone outside this self-proclaiming, ' +
'highly-selective circle." In Rob Horning\'s April 2009 article "The Death of the Hipster" in PopMatters, he states that the hipster might be the ' +
'"embodiment of postmodernism as a spent force, revealing what happens when pastiche and irony exhaust themselves as aesthetics." In a New York Times ' +
'editorial, Mark Greif states that the much-cited difficulty in analyzing the term stems from the fact that any attempt to do so provokes universal anxiety, ' +
'since it "calls everyone\'s bluff".'
];

var seconds = 60;

var onClick = function() {
  var randomPassage = passageArray[Math.floor(Math.random() * passageArray.length)];
  var container = document.getElementById('container');
  document.body.removeChild(container);
  document.body.style.backgroundColor = 'white';
  document.body.style.display = 'block';

  var wrapperDiv = document.createElement('div');
  document.body.appendChild(wrapperDiv);
  wrapperDiv.className = 'wrapper';
  var timerDiv = document.createElement('div');
  timerDiv.className = 'timer';
  wrapperDiv.appendChild(timerDiv);
  timerDiv.innerHTML = '1:00';
  var passageDiv = document.createElement('div');
  passageDiv.className = 'passage';
  passageDiv.innerHTML = randomPassage;

  wrapperDiv.appendChild(passageDiv);
  var textArea = document.createElement('textarea');
  textArea.id = 'text';
  wrapperDiv.appendChild(textArea);
  textArea.addEventListener('keypress', onType);
};

button.addEventListener('click', onClick);

var seconds = 60;
var time = null;
var text = document.getElementById('text');

function minusSecond () {
  if (seconds > 0) {
    seconds -= 1;
    var timer = document.querySelector('.timer');
    timer.innerHTML = '0:' + seconds;
    if (seconds <10)
      timer.innerHTML = '0:0' + seconds;
  }
  else {
    window.clearInterval(time);
    var wrapperDiv = document.querySelector('.wrapper');
    document.body.removeChild(wrapperDiv);
    document.body.style.backgroundColor = 'rgb(179, 210, 181)';
    document.body.style.display = 'flex';
    var container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    var result = document.createElement('h3');
    container.appendChild(result);
    var wpm = document.createElement('p');
    container.appendChild(wpm);
    var again = document.createElement('h6');
    container.appendChild(again);
    result.innerHTML = 'Result:';
    wpm.innerHTML = 'You got words per minute!';
    h3.innerHTML = '<a href="http://rachelmcquirk.come/projects/typetest">Try Again?</a>';
  }
}


var isPaused = false;

var onType = function() {
  if (isPaused) {
    return;
  }
  minusSecond();
  time = setInterval(minusSecond, 1000);
  isPaused = true;
};
