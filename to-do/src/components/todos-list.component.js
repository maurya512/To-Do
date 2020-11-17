import React , { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+ props.todo._id}>Edit</Link>
        </td>
    </tr>
)
export default class TodosList extends Component {

    // we use the constructor to initialize the state with an empty todos array
    constructor(props){
        super(props)
        this.state = {todos: []};
    }

    // to retrieve the todos data from the database the componentDidMount lifecycle is used
    componentDidMount() {
        // using the axios.get method to access the endpoint and once result becomes available we are assigning that to the todos array using this.setState method 
        axios.get('http://localhost:5000/todos/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i}/>;
        })
    }
    render() {
        // jsx code in the return statement
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{marginTop: 30}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* to output a table row of each todo item */}
                        { this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}