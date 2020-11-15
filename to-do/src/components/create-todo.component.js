import React , { Component } from "react";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this);
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this);
        this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // setting the initial state of the component by assigned an object to each state
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    // methods to update the state properties
    onChangeToDoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeToDoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeToDoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Form Submitted');
        console.log(`ToDo Description: ${this.state.todo_description}`);
        console.log(`ToDo Responsible ${this.state.todo_responsible}`);
        console.log(`ToDo Priority ${this.state.todo_priority}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render() {
        return (
            <div>
                Welcome to Create Todos Component
            </div>
        )
    }
}