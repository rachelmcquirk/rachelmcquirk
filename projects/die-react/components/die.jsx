var Die = React.createClass({
  getInitialState: function() {
    return {
      randomNumber: 1 + Math.floor(Math.random() * 6)
    };
  },
  onClick: function() {
    var sound = document.getElementById('sound');
    sound.play();

    this.setState({
      randomNumber: 1 + Math.floor(Math.random() * 6)
    });
  },
  render: function () {
    // check if the current random number is in the list of numbers where it should be shown
    var isTopLeftDotVisible = [4, 5, 6].indexOf(this.state.randomNumber) !== -1;
    var isMiddleLeftDotVisible = [6].indexOf(this.state.randomNumber) !== -1;
    var isBottomLeftDotVisible = [2, 3, 4, 5, 6].indexOf(this.state.randomNumber) !== -1;
    var isCenterDotVisible = [1, 3, 5].indexOf(this.state.randomNumber) !== -1;
    var isTopRightDotVisible = [2, 3, 4, 5, 6].indexOf(this.state.randomNumber) !== -1;
    var isMiddleRightDotVisible = [6].indexOf(this.state.randomNumber) !== -1;
    var isBottomRightDotVisible = [4, 5, 6].indexOf(this.state.randomNumber) !== -1;

    return (
      <div>
        <h1>Roll me, please!</h1>
        <div id='die'>
          <div className={isTopLeftDotVisible && 'visible'} id='one'></div>
          <div className={isMiddleLeftDotVisible && 'visible'} id='two'></div>
          <div className={isBottomLeftDotVisible && 'visible'} id='three'></div>
          <div className={isTopRightDotVisible && 'visible'} id='four'></div>
          <div className={isCenterDotVisible && 'visible'} id='five'></div>
          <div className={isMiddleRightDotVisible && 'visible'} id='six'></div>
          <div className={isBottomRightDotVisible && 'visible'} id='seven'></div>
        </div>

        <button onClick={this.onClick} >Shake it!</button>

        <audio id='sound'>
          <source src='/sounds/die.mp3' type='audio/mpeg' />
          <source src='/sounds/die.wav' type='audio/wav' />
        </audio>
      </div>
    )
  }
});
