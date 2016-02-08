var React = require('react');
var ReactDOM = require('react-dom');
var ItemToDo = require ("./itemToDo.jsx");
var _ = require("underscore");

var DisplayView = React.createClass({

 
  render: function() {
    // Render the text of each comment as a list item 
    var sortedToDos = _.sortBy(this.props.todoItems,this.props.sortColumn);

    return (
      <div>
        <div id="displayItems">
        <h4>To Do Item List</h4>
        <div id="colTitles">
          <ul id="titleUL">
            <li className="titles">To Do Items</li>
            <li className="titles">Categories</li>
            <li className="titles">Due Date</li>
            <li className="titles">Status</li>
            <li className="titles">Priority</li>
          </ul>
      </div>
        <ul>
          {sortedToDos.map(function(todo) {
          return <ItemToDo todo={todo} />
          })}
        </ul>
        </div>
        <div>
          <hr/>
        </div>
      </div>
    );
  }
});

module.exports = DisplayView;