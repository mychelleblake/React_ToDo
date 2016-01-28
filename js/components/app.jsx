var React = require('react');
var ReactDOM = require('react-dom');
var DisplayView = require('./displayView.jsx');
var Nav = require('./nav.jsx');
var InputView = require('./inputView.jsx');
var StatusView = require('./statusView.jsx');
var ParseReact = require('parse-react'); 
// require('./css/main.css');

//add others if DV works

var App = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions 
    observe: function() {
    // Subscribe to all Comment objects, ordered by creation date 
    // The results will be available at this.data.comments 
    return {
      todoData: (new Parse.Query('Item'))
    };
  },
  render: function () {
    return (
      <div>
        <div id="appBox">

        	<Nav/>
        	<InputView/>
        	<DisplayView todoItems={this.data.todoData} />
        	<StatusView/>

        </div>
      </div>
    )
  }
});

module.exports = App;