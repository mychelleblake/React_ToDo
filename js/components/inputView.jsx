var React = require('react');
var ReactDOM = require('react-dom');
var ParseReact = require('parse-react'); 
// require('./css/main.css');

var InputView = React.createClass({
	getInitialState: function () {
		return {
			toDoInput: "",
			toDoDue: "",
			todoStatus: "notstart",
			toDoPriority: "high",
			todoCategory: "personal"
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
	handleChangeToDoCategory: function (event) {
	this.setState({toDoCategory: event.target.value})
	},
	handleFormSubmit: function (event) {
		event.preventDefault();
		console.log(this.state);
	ParseReact.Mutation.Create("Item", {
		todoitem: this.state.toDoInput,
		dateDue: new Date(this.state.toDoDue),  //convert into a date object
		status: this.state.todoStatus,
		Priority: this.state.toDoPriority,
		category: this.state.todoCategory
	}).dispatch();
	},
  render: function () {
    return (
      <div>
        <div id="inputBox">
        	<h4>Add a New To Do Item</h4>
        	<form onSubmit={this.handleFormSubmit}>
	        	<input id="toDoInput" type="text" placeholder="Enter To Do Here" value={this.state.toDoInput} onChange={this.handleChangeToDoInput} />
	
	        	<input id="toDoDue" type="text" placeholder="Due Date?" value={this.state.toDoDue} onChange={this.handleChangeToDoDue} />

	        	<div className="selectItem1">
		        	<select id="todoStatus" value={this.state.todoStatus} onChange={this.handleChangeToDoStatus}>
		        		<option value="Not Started">Not Started</option>
		        		<option value="Pending">Pending</option>
		        		<option value="In Progress">In Progress</option>
		        		<option value="Completed">Completed</option>
		        	</select>
	        	</div>

	        	<div className="selectItem3">
	        		<select id="todoCategory" value={this.state.todoCategory} onChange={this.handleChangeToDoCategory}>
	        			<option value="Business">Business</option>
	        			<option value="Personal">Personal</option>
	        			<option value="School">School</option>
	        		</select>
	        	</div>

	        	<div className="selectItem2">
		        	<select id="toDoPriority" name="Priority" value={this.state.toDoPriority} onChange={this.handleChangeToDoPriority}>
		        		<option value="High">High</option>
		        		<option value="Medium">Medium</option>
		        		<option value="Low">Low</option>
					</select>    
				</div>	

	        		<input className="buttonSubmit" type="submit" id="submitButton" value="Submit" />
	        </form>
        </div>
        <div>
        	<hr/>
        </div>
      </div>
    )
  }
});

module.exports = InputView;

