var React = require('react');
var ReactDOM = require('react-dom');

var Nav = React.createClass ({
	render: function () {
		return (
			<div>
				<div id="navigation">
					<h2>My To Do List</h2>
					{/*<img src="/images/doallthings.jpg"/>*/}
				</div>
			</div>
		)
	}
});

module.exports = Nav;