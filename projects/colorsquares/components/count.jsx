var Count = React.createClass({
  getInitialState: function() {
    return {
      divWidth: '100%',
      divHeight: '100%',
      count: 0,
      colorArray: []
    };
  },
  onClick: function() {
    var number = randomColor();
    document.body.style.backgroundColor = number;
    this.setState({count: this.state.count + 1, colorArray: this.state.colorArray.concat([number])});
  },
  onLinkClick: function(e) {
    e.stopPropagation();
    document.body.style.backgroundColor = '#ffffff';
  },
  render: function() {
    var divStyle = {width:this.state.divWidth, height: this.state.divHeight};
    var count = 0;

    var blocks = [];
    for(var i = 0; i < this.state.colorArray.length; i++) {
      var divColor = {backgroundColor: this.state.colorArray[i]};
      blocks.push(<div className='blocks' style={divColor}></div>);
    }
    return (
      <div onClick={this.onClick} style={divStyle}>
        <div><a href='#/message' onClick={this.onLinkClick}>Text Color Page</a></div>
        <h1>Click anywhere.</h1>
        <div id='counter'>{this.state.count} color squares!</div>
        <div id='blocks-container'>{blocks}</div>
      </div>
    )
  }
});
