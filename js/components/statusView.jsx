var React = require('react');
var ReactDOM = require('react-dom');
var ParseReact = require('parse-react'); 


var StatusView = React.createClass ({
	sortColStatus: function () {
		this.props.changeSortColumn("status")
	},
	sortColPriority: function () {
		this.props.changeSortColumn("Priority")
	},
	sortColDueDate: function () {
		this.props.changeSortColumn("dateDue")
	},
	render: function () {
		var numberToDos = this.props.todoItems.length;

		return (
			<div>
				<div id="status">
					<div id="countToDos">
						<h4>Number of Items: {numberToDos}</h4>
					</div>
					<div id="status1ToDos">
						<h4>Sort by:</h4>
						<button id="sortByStatus" type="submit" onClick={this.sortColStatus}>Status</button>					 
						<button id="sortByPriority" type="submit" onClick={this.sortColPriority}>Priority</button>
						<button id="sortByDateDue" type="submit" onClick={this.sortColDueDate}>Date Due</button>
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