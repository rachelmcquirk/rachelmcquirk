var day = document.getElementById('birthDay');

var html = '';
for (var i = 1; i < 32; i++) {

  if (i < 2)
    html += '<select id="day"><option value="">Day</option>';
  if (i < 10)
    html += '<option value="0' + i + '">' + i + '</option>';
  if (i > 9)
    html += '<option value="' + i + '">' + i + '</option>';
  if (i === 31)
    html+= '</select>';
}

day.innerHTML = html;
var button = document.querySelector('button');

var birthdayMap = {
  '01-19': 'capricorn',
  '02-18': 'aquarius',
  '03-20': 'pisces',
  '04-19': 'aries',
  '05-20': 'taurus',
  '06-20': 'gemini',
  '07-22': 'cancer',
  '08-22': 'leo',
  '09-21': 'virgo',
  '10-23': 'libra',
  '11-21': 'scorpio',
  '12-21': 'sagittarius',
  '12-22': 'capricorn',
};

var sign = {
  'capricorn': '/images/horoscope/capricorn.png',
  'aquarius': '/images/horoscope/aquarius.png',
  'pisces': '/images/horoscope/pisces.png',
  'aries': '/images/horoscope/aries.png',
  'taurus': '/images/horoscope/taurus.png',
  'gemini': '/images/horoscope/gemini.png',
  'cancer': '/images/horoscope/cancer.png',
  'leo': '/images/horoscope/leo.png',
  'virgo': '/images/horoscope/virgo.png',
  'libra': '/images/horoscope/libra.png',
  'scorpio': '/images/horoscope/scorpio.png',
  'sagittarius': '/images/horoscope/sagittarius.png'
};

var onClick = function() {
  var month = document.getElementById('month');
  var monthAnswer = month.options[month.selectedIndex].value;
  var day = document.getElementById('day');
  var dayAnswer = day.options[day.selectedIndex].value;
  var birthday = monthAnswer + '-' + dayAnswer;

  for (var date in birthdayMap){
    if (birthday <= date)
      break;
  }

  for (var zodiac in sign) {
    if (birthdayMap[date] === zodiac)
      break;
  }

  var innerWrapper = document.getElementById('inner-wrapper');
  innerWrapper.innerHTML = '';

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var wrapperDiv = document.getElementById('wrapper');

      var zodiacSign = document.createElement('div');
      zodiacSign.className = 'zodiacSign';
      innerWrapper.appendChild(zodiacSign);
      var horoscope = document.createElement('div');
      horoscope.className = 'horoscope';
      innerWrapper.appendChild(horoscope);

      wrapperDiv.style.height = '550px';
      wrapperDiv.style.width = '800px';
      zodiacSign.innerHTML = '<img src="' + sign[zodiac] + '">';
      horoscope.innerHTML = xmlhttp.responseText;
    }
  };

    xmlhttp.open('GET', 'http://clay.io/kikapps/horoscopes/' + birthdayMap[date] + '.txt?123', true);
    xmlhttp.send();
};

button.addEventListener('click', onClick);
