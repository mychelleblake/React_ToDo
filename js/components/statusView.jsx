var React = require('react');
var ReactDOM = require('react-dom');

var StatusView = React.createClass ({
	render: function () {
		return (
			<div>
				<div id="status">
					<div id="countToDos">
						<button id="numTodos" type="submit"># of Items</button>
						<button id="allTodos" type="submit">All Items</button>
						<button id="activeToDos" type="submit">Active Items</button>
						<button id="notStartToDos" type="submit">Items Not Started</button>
						<button id="pendingToDos" type="submit">Pending Items</button>
						<button id="completedToDos" type="submit">Completed Items</button>					 
					</div>
					<div id="statusToDos">
						<button id="statusHigh" type="submit">High</button>
						<button id="statusMedium" type="submit">Medium</button>
						<button id="statusLow" type="submit">Low</button>

					</div>
				</div>
			</div>
		)
	}
});

module.exports = StatusView;