var Message = React.createClass({
  getInitialState: function() {
    return {
      color: ''
    };
  },
  onKeyDown: function() {
    this.setState({color: randomColor()});
  },
  render: function() {
    var textColor = {color: this.state.color};
    return (
      <div>
        <div><a href='#/count'>Counter Page</a></div>
        <h1 style={textColor}>Rainbow Text</h1>
        <textarea id="message" onKeyDown={this.onKeyDown} style={textColor}></textarea>
      </div>
    )
  }
});
