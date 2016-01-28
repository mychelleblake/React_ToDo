var React = require('react');
var ReactDOM = require('react-dom');
var ParseReact = require('parse-react'); 
// require('./css/main.css');

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
	ParseReact.Mutation.Create("Item", {
		todoitem: this.state.toDoInput,
		dateDue: this.state.toDoDue,
		status: this.state.todoStatus,
		Priority: this.state.toDoPriority
	}).dispatch();
	},
  render: function () {
    return (
      <div>
        <div id="inputBox">
        	<h3>Add a New To Do Item</h3>
        	<form onSubmit={this.handleFormSubmit}>
	        	<input id="toDoInput" type="text" placeholder="Enter To Do Here" value={this.state.toDoInput} onChange={this.handleChangeToDoInput} />
	
	        	<input id="toDoDue" type="text" placeholder="Due Date?" value={this.state.toDoDue} onChange={this.handleChangeToDoDue} />

	        	<div className="selectItem">
		        	<select id="todoStatus" value={this.state.todoStatus} onChange={this.handleChangeToDoStatus}>
		        		<option value="notstart">Not Started</option>
		        		<option value="pending">Pending</option>
		        		<option value="inprogress">In Progress</option>
		        		<option value="complete">Completed</option>
		        	</select>
	        	</div>

	        	<div className="selectItem">
		        	<select id="toDoPriority" value={this.state.toDoPriority} onChange={this.handleChangeToDoPriority}>
		        		<option value="high">High</option>
		        		<option value="medium">Medium</option>
		        		<option value="low">Low</option>
					</select>    
				</div>	

	        		<input className="buttonSubmit" type="submit" id="submitButton" value="Submit" />
	        </form>
        </div>
      </div>
    )
  }
});

module.exports = InputView;

