var List = React.createClass({
  getInitialState: function () {
    return {
      listItems: [],
      value: '',
    };
  },
  onKeyDown: function (e) {
    if (e.key === 'Enter') {
      this.setState({listItems: this.state.listItems.concat([this.state.value]), value: ''});
    }
  },
  handleChange: function () {
    this.setState({value: event.target.value});
  },
  render: function () {
    listItemElements = [];
    var listItems = this.state.listItems;
    for (var i = 0; i < listItems.length; i++) {
      var self = this;
      (function(i) {
        var onClick = function () {
          self.state.listItems.splice(i, 1);
          console.log(i);
          self.setState({listItems: self.state.listItems});
          console.log(self.state.listItems);
        };

        listItemElements.push(
          <div className='item'>
            <div className='squaredFour'>
              <input type='checkbox' value='None' id='squaredFour' name='check' />
              <label for='squaredFour'></label>
            </div>
            <div id='item-text'>{listItems[i]}</div>
            <div className='cross-off' onClick={onClick}>x</div>
          </div>);
        })(i);
    }

    return (
      <div>
        <h1>To-dos</h1>
        <div id='new-todo'>
        <input type='text' placeholder='What needs to be done?' value={this.state.value} onChange={this.handleChange} onKeyDown={this.onKeyDown} />
        </div>
        <div id='items-container'>{listItemElements}</div>
      </div>
    )
  }
})
