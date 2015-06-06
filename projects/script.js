var projects = [
  {
    link: '/projects/textscroll',
    screenshot: '/images/projects/textscroll.png',
    name: 'Scrolling Text',
    description: 'Enter some text and watch it scroll, then enter some more, if you wish.'
  },
  {
    link: '/projects/notepost',
    screenshot: '/images/projects/notepost.png',
    name: 'Note Post',
    description: 'Post a note here and anyone can see the 3 most recent posts!'
  },
  {
    link: '/projects/hangman',
    screenshot: '/images/projects/hangman.png',
    name: 'Hangman',
    description: 'Revisit your childhood with a game of Hangman'
  },
  {
    link: '/index.html',
    screenshot: '/images/projects/newhome.png',
    name: 'New Homepage!',
    description: 'My second homepage version!'
  },
  {
    link: '/projects/horoscope2',
    screenshot: '/images/projects/horoscope2.png',
    name: 'Daily Horoscope - part 2',
    description: 'See what your day holds with this daily horoscope!'
  },
  {
    link: '/projects/horoscope',
    screenshot: '/images/projects/horoscope.png',
    name: 'Daily Horoscope - part 1',
    description: 'This is a working horoscope but the one next door is not quite as ugly ;)'
  },
  {
    link: '/projects/tictactoe',
    screenshot: '/images/projects/tictactoe.png',
    name: 'Tic-Tac-Toe',
    description: 'Challenge a friend to a game of tic-tac-toe!'
  },
  {
    link: '/projects/typetest',
    screenshot: '/images/projects/typingtest.png',
    name: 'Typing Test',
    description: 'How many words can you type in 1 minute?'
  },
  {
    link: '/projects/gridpuzzle',
    screenshot: '/images/projects/gridpuzzle.png',
    name: 'Grid Puzzle',
    description: 'Try to figure out who owns the Australian Shepherd in this awesome grid puzzle!'
  },
  {
    link: '/projects/animations',
    screenshot: '/images/projects/animations.png',
    name: 'CSS Animations',
    description: 'Check out the CSS Animations! I added my favorite TV shows for some interesting content for those uninterested in CSS animations.'
  },
  {
    link: '/projects/guessthenumber',
    screenshot: '/images/projects/guessthenumber.png',
    name: 'Guess the number',
    description: 'Tyrese the T-rex will pick a random number, your goal is to guess it correctly within 5 turns as Tyrese gives you clues.'
  },
  {
    link: '/projects/memory',
    screenshot: '/images/projects/memory.png',
    name: 'Memory Game',
    description: 'Test your memory with cute pictures of dogs!'
  },
  {
    link: '/projects/flexbox',
    screenshot: '/images/projects/flexbox.png',
    name: 'Learning Flexbox',
    description: 'This project was all about me learning how to position with flexbox.'
  },
  {
    link: '/projects',
    screenshot: '/images/projects/projects.png',
    name: 'New Projects Page',
    description: 'You\'re seeing double! I re-did the projects page as one of my projects'
  },
  {
    link: '/projects/die',
    screenshot: '/images/projects/die.png',
    name: 'Shake the Die',
    description: 'Playing a game and need a die? Look no further.'
  },
  {
    link: '/projects/cupcakeclicker3',
    screenshot: '/images/projects/cupcake3.png',
    name: 'Cupcake Clicker: Part 3',
    description: 'Yay, the final product! Now the price of grandmas, trucks, and bakeries will increase the more you buy. There\'s also an awesome news feed that changes with your progression in the game. Let\'s make some cupcakes!'
  },
  {
    link: '/projects/cupcakeclicker2',
    screenshot: '/images/projects/cupcake2.png',
    name: 'Cupcake Clicker: Part 2',
    description: 'This is part 2 of Cupcake Clicker. You can now make purchases from the store!'
  },
  {
    link: '/projects/cupcakeclicker',
    screenshot: '/images/projects/cupcake.png',
    name: 'Cupcake Clicker',
    description: 'Part one of cupcake clicker! At this stage you can see how many times you\'ve clicked the cupcake but the shop won\'t work.'
  },
  {
    link: '/projects/nightandday',
    screenshot: '/images/projects/nightandday.png',
    name: 'Night and Day',
    description: 'Ever wish you could control time? Well now you can...online. Change between night and day. Be sure to listen to the wonderful sounds night and day have to offer!'
  },
  {
    link: '/projects/clickercounter',
    screenshot: '/images/projects/clickercounter.png',
    name: 'Clicker Counter',
    description: 'How fast can you click? This project will tell you your average per second.'
  },
  {
    link: '/projects/digitalclock',
    screenshot: '/images/projects/clock.png',
    name: 'Digital Clock',
    description: 'A wonderful digital clock that will give you a beautiful color for each minute.'
  },
  {
    link: '/projects/makingmusic',
    screenshot: '/images/projects/music.png',
    name: 'Making Music',
    description: 'Click on the beautiful colored sqaures to here a note. Let\'s make some music!'
  },
  {
    link: '/projects/deardiaryfirebase',
    screenshot: '/images/projects/firebasediary.png',
    name: 'Dear Diary with Firebase',
    description: 'More like Anti-Diary! This is just like Dear Diary but stores data using Firebase rather than Local Storage.'
  },
  {
    link: '/projects/easter',
    screenshot: '/images/projects/bunny.png',
    name: 'Easter Bunny',
    description: 'Ahh! Make the creepy Easter Bunny go away!'
  },
  {
    link: '/projects/deardiary',
    screenshot: '/images/projects/diary.png',
    name: 'Dear Diary',
    description: 'Write in your diary and save it to your local storage'
  },
  {
    link: '/projects/sweet2/home.html',
    screenshot: '/images/projects/sweet2.png',
    name: 'Sweet nuTREATion (cont.)',
    description: 'Learn more about the nutrients in the treats and meet the team behind Sweet nuTREATion.'
  },
  {
    link: '/projects/sweet/home.html',
    screenshot: '/images/projects/sweet1.png',
    name: 'Sweet nuTREATion',
    description: 'If only it were possible... Check out this psuedo site used with Bootstrap!'
  },
  {
    link: '/projects/selfie',
    screenshot: '/images/projects/selfie.png',
    name: 'Selfie Space',
    description: 'A place for your face! Take pictures. No duck faces, please!'
  },
  {
    link: '/projects/prettyquiz',
    screenshot: '/images/projects/quiz3.png',
    name: 'Quiz: The Finished Version',
    description: 'Final quiz version! Take this Buzzfeed-like quiz that tells you what kind of vacation you should go on.'
  },
  {
    link: '/projects/parttwoquiz',
    screenshot: '/images/projects/quiz2.png',
    name: 'Quiz: Part 2',
    description: 'The quiz works at this stage but it\'s still not very pretty. You should take the final version ;)'
  },
  {
    link: '/projects/partonequiz',
    screenshot: '/images/projects/quiz1.png',
    name: 'Quiz: Part 1',
    description: 'This is the base of my vacation quiz. It\'s pretty ugly and doesn\'t really make sense at this stage, it just spits back the categories of your answers.'
  },
  {
    link: '/projects/letsmakeadeal',
    screenshot: '/images/projects/deal.png',
    name: 'Let\'s Make a Deal',
    description: 'Play this game that relates to Monty Hall problem, a famous probability paradox. If you win you get a reward, if you lose, you get something cringeworthy.'
  },
  {
    link: '/projects/moviegenerator',
    screenshot: '/images/projects/movie.png',
    name: 'Movie Generator',
    description: 'Can\'t decide on a movie to watch? Try out my random movie generator and it will pick one of my favorites - with great IMDb ratings I might add.'
  },
  {
    link: '/projects/colorgenerator',
    screenshot: '/images/projects/color.png',
    name: 'Pretty Color Generator',
    description: 'A color generator that uses a script for getting rid of the ugly colors (browns, grays) - resulting in a random selection from a pool of pretty colors.'
  },
  {
    link: '/projects/madlib',
    screenshot: '/images/projects/madlib.png',
    name: 'Madlib',
    description: 'Create a wacky story with this party madlib!'
  },
  {
    link: '/projects/firsthome',
    screenshot: '/images/projects/home.png',
    name: 'Home Page',
    description: 'My home page and first ever project!'
  }
];

var projectContainer = document.getElementById('projects-container');

var html = '';
for(var i = 0; i < projects.length; i++) {
  var project = projects[i];
  if(i % 3 === 0)
    html += '<div class="row">';
  html +=
    '<div class="col-md-4">' +
      '<div class="ih-item square effect6 from_top_and_bottom">' +
        '<a href="' + project.link + '">' +
          '<div class="img"><img src="' + project.screenshot + '" alt="img"></div>' +
          '<div class="info">' +
            '<h3>'+ project.name + '</h3>' +
            '<p>' + project.description + '</p>' +
          '</div>' +
        '</a>' +
      '</div>' +
    '</div>';
  if(i % 3 === 2)
    html += '</div>';
}
projectContainer.innerHTML = html;
