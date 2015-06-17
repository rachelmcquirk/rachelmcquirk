
var dateOptions = '';
for (var i = 1; i < 32; i++) {
  if (i < 2)
  dateOptions += '<select id="day"><option value="">Day</option>';
  if (i < 10)
  dateOptions += '<option value="0' + i + '">' + i + '</option>';
  if (i > 9)
  dateOptions += '<option value="' + i + '">' + i + '</option>';
  if (i === 31)
  dateOptions += '</select>';
}

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

var Horoscope = React.createClass({
  getInitialState: function() {
    return {
      wrapperWidth: '550px',
      wrapperHeight: '350px',
      zodiacSign: '',
      horoscope: ''
    };
  },
  onClick: function() {
    var monthAnswer = month.options[month.selectedIndex].value;
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

    var self = this;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        self.setState({
          wrapperWidth: '700px',
          wrapperHeight: '500px',
          signImage: sign[zodiac],
          horoscope: xmlhttp.responseText
        });
      }
    };

      xmlhttp.open('GET', 'http://clay.io/kikapps/horoscopes/' + birthdayMap[date] + '.txt?123', true);
      xmlhttp.send();
  },
  render: function() {
    var wrapperStyle = {width: this.state.wrapperWidth, height: this.state.wrapperHeight};
    var horoscopeInputStyle = {display: this.state.signImage ? 'none' : 'block'};
    var zodiacStyle = {display: this.state.signImage ? 'block' : 'none'};

    return (
      <div id='wrapper' style={wrapperStyle}>
        <div id='inner-wrapper'>
          <div style={horoscopeInputStyle}>
            <h1>Get your Horoscope</h1>
            <h3>Enter your birthday</h3>
            <select id='month'>
              <option>Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <div id='birthDay' dangerouslySetInnerHTML={{__html: dateOptions}}></div>
            <button onClick={this.onClick} >Lets go!</button>
          </div>
          <div className='zodiacSign' style={zodiacStyle}>
            <img src={this.state.signImage} />
          </div>
          <div className='horoscope' style={zodiacStyle} dangerouslySetInnerHTML={{__html: this.state.horoscope}}></div>
        </div>
      </div>
    )
  }
});
