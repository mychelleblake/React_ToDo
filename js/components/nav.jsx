var React = require('react');
var ReactDOM = require('react-dom');
// require('./css/main.css');

var Nav = React.createClass ({
	render: function () {
		return (
			<div>
				<div id="navigation">
					<h2>My To Do List</h2>
					<img src="http://i.imgur.com/mVrEIkA.jpg"/>

				</div>
			</div>
		)
	}
});

module.exports = Nav;