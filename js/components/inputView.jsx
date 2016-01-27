var React = require('react');
var ReactDOM = require('react-dom');


var InputView = React.createClass({
	getInitialState: function () {
		return {
			toDoInput: "",
			toDoDue: "",
			todoStatus: "",
			toDoPriority: ""
		}
	},
	handleChangeToDoInput: function (event) {
		this.setState({toDoInput: event.target.value})
	},
	handleChangeToDoDue: function (event) {
		this.setState({toDoDue: event.target.value})
	},
	handleChangeToDoStatus: function (event) {
	this.setState({todoStatus: event.target.value})
	},
	handleChangeToDoPriority: function (event) {
	this.setState({toDoPriority: event.target.value})
	},
	handleFormSubmit: function (event) {
		event.preventDefault();
		console.log(this.state);
	},
  render: function () {
    return (
      <div>
        <div id="inputBox">
        	<form onSubmit={this.handleFormSubmit}>
	        	<input id="toDoInput" type="text" placeholder="Enter To Do Here" value={this.state.toDoInput} onChange={this.handleChangeToDoInput} />
	
	        	<input id="toDoDue" type="text" placeholder="Due Date?" value={this.state.toDoDue} onChange={this.handleChangeToDoDue} />

	        	<select id="todoStatus" value={this.state.todoStatus} onChange={this.handleChangeToDoStatus}>
	        		<option value="notstart">Not Started</option>
	        		<option value="pending">Pending</option>
	        		<option value="inprogress">In Progress</option>
	        		<option value="complete">Completed</option>
	        	</select>

	        	<select id="toDoPriority" value={this.state.toDoPriority} onChange={this.handleChangeToDoPriority}>
	        		<option value="high">High</option>
	        		<option value="medium">Medium</option>
	        		<option value="low">Low</option>
				</select>    	
	        		<input type="submit" id="submitButton" value="Submit" />
	        </form>
        </div>
      </div>
    )
  }
});

module.exports = InputView;

