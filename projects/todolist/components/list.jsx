var List = React.createClass({
  getInitialState: function () {
    return {
      listItems: [],
      value: ''
    };
  },
  onKeyDown: function (e) {
    if (e.key === 'Enter') {
      var listItemObject = {
        text: this.state.value,
        isChecked: false
      };
      this.setState({listItems: this.state.listItems.concat([listItemObject]), value: ''});
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
          self.setState({listItems: self.state.listItems});
          console.log(self.state.listItems);
        };

        var onCheckChange = function (e) {
          var updatedListItems = self.state.listItems;
          updatedListItems[i].isChecked = e.target.checked;
          var itemToMove = updatedListItems[i];
          updatedListItems.splice(i, 1);
          if (e.target.checked)
            updatedListItems.push(itemToMove);
          else
            updatedListItems.unshift(itemToMove);
          self.setState({listItems: updatedListItems});
        };

        listItemElements.push(
          <div className='item'>
            <div className='squaredFour'>
              <input type='checkbox' value='None' id='squaredFour' name='check' onChange={onCheckChange} checked={listItems[i].isChecked} />
              <label for='squaredFour'></label>
            </div>
            <div className={listItems[i].isChecked ? 'item-text is-checked' : 'item-text'}>{listItems[i].text}</div>
            <div className='cross-off' onClick={onClick}>&times;</div>
          </div>);
        })(i);
    }

    console.log(this.state.listItems);
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
