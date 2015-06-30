var List = React.createClass({
  getInitialState: function () {
    return {
      listItems: [],
      value: ''
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
      listItemElements.push(
        <div className='item'>
          <div className='squaredFour'>
            <input type='checkbox' value='None' id='squaredFour' name='check' />
            <label for='squaredFour'></label>
          </div>
          <div id='item-text'>{listItems[i]}</div>
        </div>);
    }
    console.log(listItems);
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
