var button = document.getElementById('button');
var movie = document.getElementById('movie');
var title = document.getElementById('title');
var imdb = document.getElementById('imdb');
var genre = document.getElementById('genre');
var picture = document.getElementById('picture');
var summary = document.getElementById('summary');
 var trailer = document.getElementById('trailer');

var gump = {
  title: 'Forrest Gump(1994)',
  imdb: 8.8,
  genre: 'Drama, Romance',
  picture: '/images/movies/gump.jpg',
  summary: 'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother ' +
  '(Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in ' +
  'Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may ' +
  'be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).',
  trailer: 'https://www.youtube.com/embed/uPIEn0M8su0'
};

var nest = {
  title: 'One Flew Over the Cuckoo\'s Nest (1975)',
  imdb: 8.7,
  genre: 'Drama',
  picture: '/images/movies/nest.jpg',
  summary: 'When Randle Patrick McMurphy (Jack Nicholson) gets transferred for evaluation from a prison farm to a mental institution, ' +
  'he assumes it will be a less restrictive environment. But the martinet Nurse Ratched (Louise Fletcher) runs the psychiatric ward ' +
  'with an iron fist, keeping her patients cowed through abuse, medication and sessions of electroconvulsive therapy. The battle of ' +
  'wills between the rebellious McMurphy and the inflexible Ratched soon affects all the ward\'s patients.',
  trailer: 'https://www.youtube.com/embed/2WSyJgydTsA'
};

var titanic = {
  title: 'Titanic (1997)',
  imdb: '7.7',
  genre: 'Drama, Romance',
  picture: '/images/movies/titanic.jpg',
  summary: 'A seventeen-year-old aristocrat (Kate Winslet), expecting to be married to a rich claimant by her mother, falls in love ' +
  'with a kind but poor artist (Leonardo DiCaprio) aboard the luxurious, ill-fated R.M.S. Titanic.',
  trailer: 'https://www.youtube.com/embed/zCy5WQ9S4c0'
};

var shutter = {
  title: 'Shutter Island (2010)',
  imdb: 8.1,
  genre: 'Mystery, Thriller',
  picture: '/images/movies/shutter.jpg',
  summary: 'In 1954, U.S. Marshal Teddy Daniels (Leonardo DiCaprio) is investigating the disappearance of a murderess who escaped ' +
  'from a hospital for the criminally insane and is presumed to be hiding near-by.',
  trailer: 'https://www.youtube.com/embed/5iaYLCiq5RM'
};

var prestige = {
  title: 'The Prestige (2006)',
  imdb: 8.5,
  genre: 'Drama, Mystery, Thriller',
  picture: '/images/movies/prestige.jpg',
  summary: 'An illusion gone horribly wrong pits two 19th-century magicians, Alfred Borden (Christian Bale) and Rupert Angier ' +
  '(Hugh Jackman), against each other in a bitter battle for supremacy. Terrible consequences loom when the pair escalate their feud, ' +
  'each seeking not just to outwit -- but to destroy -- the other man.',
  trailer: 'https://www.youtube.com/embed/o4gHCmTQDVI'
};

var up = {
  title: 'Up (2009)',
  imdb: 8.3,
  genre: 'Animation, Adventure, Comedy',
  picture: '/images/movies/up.jpg',
  summary: 'Carl Fredricksen (Ed Asner), a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of ' +
  'balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl\'s worst nightmare comes true when he ' +
  'discovers a little boy named Russell is a stowaway aboard the balloon-powered house.',
  trailer: 'https://www.youtube.com/embed/pkqzFUhGPJg'
};

var django = {
  title: 'Django Unchained (2012)',
  imdb: 8.5,
  genre: 'Western, Drama',
  picture: '/images/movies/django.jpg',
  summary: 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty ' +
  'hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, ' +
  'Schultz frees Django, and together they hunt the South\'s most-wanted criminals. Their travels take them to the infamous plantation ' +
  'of shady Calvin Candie (Leonardo DiCaprio), where Django\'s long-lost wife (Kerry Washington) is still a slave.',
  trailer: 'https://www.youtube.com/embed/eUdM9vrCbow',
};

var wild = {
  title: 'Into the Wild (2007)',
  imdb: 8.2,
  genre: 'Adventure, Biography, Drama',
  picture: '/images/movies/wild.jpg',
  summary: 'After graduating from Emory University, top student and athlete Christopher McCandless (Emile Hirsch) abandons his ' +
  'possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, ' +
  'Christopher encounters a series of characters that shape his life.',
  trailer: 'https://www.youtube.com/embed/2LAuzT_x8Ek'
};

var jumpstreet = {
  title: '21 Jump Street (2012)',
  imdb: 7.2,
  genre: 'Comedy',
  picture: '/images/movies/jumpstreet.jpg',
  summary: 'When cops Schmidt (Jonah Hill) and Jenko (Channing Tatum) join the secret Jump Street unit, they use their youthful ' +
  'appearances to go under cover as high-school students. They trade in their guns and badges for backpacks, and set out to shut down ' +
  'a dangerous drug ring. But, as time goes on, Schmidt and Jenko discover that high school is nothing like it was just a few years ' +
  'earlier -- and, what\'s more, they must again confront the teenage terror and anxiety they thought they had left behind.',
  trailer: 'https://www.youtube.com/embed/nfkiFVhiIYw'
};

var notebook = {
  title: 'The Notebook (2004)',
  imdb: 7.9,
  genre: 'Romance',
  picture: '/images/movies/notebook.jpg',
  summary: 'In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and rich girl Allie (Rachel McAdams) are desperately ' +
  'in love. But her parents don\'t approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. ' +
  'In the interim, Allie becomes involved with another man (James Marsden). But when Noah returns to their small town years later, on ' +
  'the cusp of Allie\'s marriage, it soon becomes clear that their romance is anything but over.',
  trailer: 'https://www.youtube.com/embed/4M7LIcH8C9U'
};

var grams = {
  title: '21 Grams (2003)',
  imdb: 7.7,
  genre: 'Drama, Thriller',
  picture: '/images/movies/21grams.jpg',
  summary: 'In a film that plays with the idea of straightforward storytelling, a group of troubled people find that they are ' +
  'linked in unpredictable ways. Paul Rivers (Sean Penn) is an academic dealing with a terminal heart condition, but his life is ' +
  'changed by a car crash that seems unrelated to his ailment. The traffic accident, involving ex-con Jack Jordan (Benicio Del Toro) ' +
  'and the husband of Cristina Peck (Naomi Watts), is one that ruins lives but ultimately also resurrects them.',
  trailer: 'https://www.youtube.com/embed/67w5bt9eMtM'
};

var mrnobody = {
  title: 'Mr.Nobody (2009)',
  imdb: 7.9,
  genre: 'Fantasy, Drama',
  picture: '/images/movies/mrnobody.jpg',
  summary: 'A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? ' +
  'Infinite possibilities arise from this decision. As long as he doesn\'t choose, anything is possible.',
  trailer: 'https://www.youtube.com/embed/mpi0qsp3v_w'
};

var never = {
  title: 'Never Let Me Go (2010)',
  imdb: 7.2,
  genre: 'Drama, Sci-Fi, Romance',
  picture: '/images/movies/never.jpg',
  summary: 'Friends Kathy (Carey Mulligan), Tommy (Andrew Garfield) and Ruth (Keira Knightley) grow up together at a seemingly idyllic ' +
  'boarding school in the English countryside. When they leave the school and the horrible truth of their true purpose is revealed to them, ' +
  'they must simultaneously confront deep-seated feelings of love, jealousy and betrayal that threaten to tear their friendship asunder.',
  trailer: 'https://www.youtube.com/embed/sXiRZhDEo8A'
}




var movieArray = [gump, nest, titanic, shutter, prestige, up, django, wild, jumpstreet, notebook, grams, mrnobody, never];


var lightBox = document.getElementById('lightbox');

var buttonClick = function() {
  var randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
  title.innerHTML = randomMovie.title;
  imdb.innerHTML = 'IMDb rating: ' + randomMovie.imdb;
  genre.innerHTML = randomMovie.genre;
  picture.innerHTML = '<img src=\'' + randomMovie.picture + '\' height="322" width="214">';
  summary.innerHTML = '<br>' + randomMovie.summary;
  trailer.innerHTML = '<a href="' + randomMovie.trailer + '" id="trailerLink">Watch Trailer</a>';
  var trailerLink = document.getElementById('trailerLink');
  trailerLink.addEventListener('click', function(event) {
    event.preventDefault();
    lightBox.style.display = 'block';
    lightBox.innerHTML = '<iframe width="800" height="450" src="' + randomMovie.trailer + '" frameborder="0" allowfullscreen></iframe>';
  });
};

button.addEventListener('click', buttonClick);

lightBox.addEventListener('click', function() {
  this.style.display='none';
  lightBox.innerHTML = '';
});
