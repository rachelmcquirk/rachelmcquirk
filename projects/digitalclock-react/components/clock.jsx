var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

var Clock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
    this.tick();
    this.changeColor();
  },
  tick: function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var clock = document.getElementById('clock');

    var meridiem = 'AM';
    if (hours > 12) {
      hours = hours - 12;
      meridiem = 'PM';
    }
    if (hours === 0) {
      hours = 12;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }

    if (seconds === '00') {
      this.changeColor();
    }

    this.setState({seconds: seconds, minutes: minutes, hours: hours});
  },
  getInitialState: function() {
    return {
      randomColor: '', // randomColor gets set in componentDidMount
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  changeColor: function() {
    var number = randomColor();
    document.body.style.backgroundColor = number;
    this.setState({randomColor: number});
  },
  render: function() {
    return (
      <div>
        <div id='clock'>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
        <div id='message'>The color of the minute is {this.state.randomColor}</div>
      </div>
    )
  }
});
