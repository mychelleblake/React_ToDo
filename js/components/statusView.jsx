var React = require('react');
var ReactDOM = require('react-dom');
// require('./css/main.css');

var StatusView = React.createClass ({
	render: function () {
		return (
			<div>
				<div id="status">
					<div id="countToDos">
						<h4>How Many To Do Items are There?</h4>
						<button id="numTodos" type="submit"># of Items</button>
						<button id="allTodos" type="submit">All Items</button>
					</div>
					<div id="status1ToDos">
						<h4>What is the Status of the To Do Items?</h4>
						<button id="activeToDos" type="submit">Active Items</button>
						<button id="notStartToDos" type="submit">Items Not Started</button>
						<button id="pendingToDos" type="submit">Pending Items</button>
						<button id="completedToDos" type="submit">Completed Items</button>					 
					</div>
					<div id="status2ToDos">
						<h4>Priority of To Do Items?</h4>
						<button id="statusHigh" type="submit">High</button>
						<button id="statusMedium" type="submit">Medium</button>
						<button id="statusLow" type="submit">Low</button>

					</div>
				</div>
			<div>
        		<hr/>
        	</div>
			</div>
		)
	}
});

module.exports = StatusView;