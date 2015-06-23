var Sound2 = React.createClass({
  onLinkClick: function() {
    sound.stop();
  },
  componentDidMount: function() {
    sound.currentTime = 0;
    sound.play();
  },
  render: function() {
    return(
      <div className='stars'>
        <img src='/images/random/aurora.jpg' />
        <button><a href='#/sound' onClick={this.onLinkClick}>Beachy Day</a></button>
        <audio id='sound'>
          <source src='/sounds/night.mp3' type='audio/mp3' />
          <source src='/sounds/night.wav' type='audio/wav' />
        </audio>
      </div>
    )
  }
});
