var React = require('react');
var ReactDOM = require('react-dom');
var ParseReact = require('parse-react'); 

var ItemToDo = React.createClass({
	getInitialState: function () {
		return {
			toDoInput: "",
			toDoDue: "",
			todoStatus: "Not Started",
			toDoPriority: "High",
			todoCategory: "Personal",
			inEdit: false
		}
	},
	render: function () {
		if (this.state.inEdit == false) {
			return this.renderStaticView();
		}
		else {
			return this.renderEditview();
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
	this.setState({todoCategory: event.target.value})
	},
	handleFormSubmit: function (event) {
		event.preventDefault();
		console.log(this.state);
	ParseReact.Mutation.Set(this.props.todo, {
		todoitem: this.state.toDoInput,
		dateDue: new Date(this.state.toDoDue),  //convert into a date object
		status: this.state.todoStatus,
		Priority: this.state.toDoPriority,
		category: this.state.todoCategory
	}).dispatch();
	this.setState({
		inEdit: false
	})
	},
	handleEditClick: function (event) {
		var dueDate = this.props.todo.dateDue.toString("MM/dd/yyyy");
		this.setState({
			inEdit: true,
			toDoInput: this.props.todo.todoitem,
			toDoDue: dueDate,
			todoStatus: this.props.todo.status,
			toDoPriority: this.props.todo.Priority,
			todoCategory: this.props.todo.category
		})

		event.preventDefault();
	},
	handleDeleteClick: function(event) {
		event.preventDefault();
	ParseReact.Mutation.Destroy(this.props.todo, {
		todoitem: this.state.toDoInput,
		dateDue: new Date(this.state.toDoDue),  //convert into a date object
		status: this.state.todoStatus,
		Priority: this.state.toDoPriority,
		category: this.state.todoCategory
	}).dispatch();
	this.setState({
		inEdit: false
	})
	},
	renderEditview: function() {
		return (
		<form onSubmit={this.handleFormSubmit}>
	        	<div id="editingDiv">
	        	<input id="toDoInputEdit" type="text" placeholder="Enter To Do Here" value={this.state.toDoInput} onChange={this.handleChangeToDoInput} />
	
	        	<input id="toDoDueEdit" type="text" placeholder="Due Date?" value={this.state.toDoDue} onChange={this.handleChangeToDoDue} />

	        	<div className="selectItem1">
		        	<select id="todoStatusEdit" value={this.state.todoStatus} onChange={this.handleChangeToDoStatus}>
		        		<option value="Not Started">Not Started</option>
		        		<option value="Pending">Pending</option>
		        		<option value="In Progress">In Progress</option>
		        		<option value="Completed">Completed</option>
		        	</select>
	        	</div>

	        	<div className="selectItem3">
	        		<select id="todoCategoryEdit" value={this.state.todoCategory} onChange={this.handleChangeToDoCategory}>
	        			<option value="Business">Business</option>
	        			<option value="Personal">Personal</option>
	        			<option value="School">School</option>
	        		</select>
	        	</div>

	        	<div className="selectItem2">
		        	<select id="toDoPriorityEdit" name="Priority" value={this.state.toDoPriority} onChange={this.handleChangeToDoPriority}>
		        		<option value="High">High</option>
		        		<option value="Medium">Medium</option>
		        		<option value="Low">Low</option>
					</select>    
				</div>	

	        		<input className="buttonSubmitEdit" type="submit" id="submitButton" value="Submit" />
	        	</div>
	        </form>
	)
	},



	renderStaticView: function() {
            var dueDate = this.props.todo.dateDue.toString("MM/dd/yyyy");
            return <li className="listItems">
              <div id="toDoItemCol">
                {this.props.todo.todoitem} 
              </div>
              <div id="catCol">
                {this.props.todo.category}
              </div>
              <div id="dueDateCol">
                {dueDate}
              </div>
              <div id="statusCol">
                {this.props.todo.status}
              </div>
              <div id="priorityCol">
                {this.props.todo.Priority}
              </div>
              <div id="editButton">
              	<button onClick={this.handleEditClick}>Edit</button>
              </div>
              <div id="deleteButton">
              	<button onClick={this.handleDeleteClick}>Delete</button>
              </div>
            </li>;


	}
})

module.exports = ItemToDo;