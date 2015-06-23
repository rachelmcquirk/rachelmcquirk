var Sound = React.createClass({
  onLinkClick: function() {
    sound.stop();
  },
  componentDidMount: function() {
    sound.currentTime = 0;
    sound.play();
  },
  render: function() {
    return(
      <div className='beach'>
        <img src='/images/random/beach.jpg' />
        <button><a href='#/sound2' onClick={this.onLinkClick}>Starry Night</a></button>
        <audio id='sound'>
          <source src='/sounds/waves.wav' type='audio/wav' />
        </audio>
      </div>
    )
  }
});
