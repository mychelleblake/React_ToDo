var React = require('react');
var ReactDOM = require('react-dom');
// require('./css/main.css');



var DisplayView = React.createClass({
  // mixins: [ParseReact.Mixin], // Enable query subscriptions 
 
  // observe: function() {
  //   // Subscribe to all Comment objects, ordered by creation date 
  //   // The results will be available at this.data.comments 
  //   return {
  //     todoData: (new Parse.Query('Item'))
  //   };
  // },
 
  render: function() {
    // Render the text of each comment as a list item 
    return (
      <ul>
        {this.props.todoItems.map(function(todo) {
          var dueDate = todo.dateDue.toString("MM/dd/yyyy");
          return <li>{todo.todoitem} {dueDate} {todo.status} {todo.Priority}</li>;
        })}
      </ul>
    );
  }
});

module.exports = DisplayView;