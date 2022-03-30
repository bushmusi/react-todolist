import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
    state = {
        todos: []
    }

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item;
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(item => {
                    return item.id !== id;
                })
            ]
        })
    }

    addTodoItem = title => {
        const item = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos,item]
        })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map( item => {
                if( item.id === id){
                    item.title = updatedTitle
                }
                return item
            })
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.todos !== this.state.todos){
            const temp = this.state.todos;
            localStorage.setItem('todos',JSON.stringify(temp));
        }
    }

    componentDidMount() {
        const temp = JSON.parse(localStorage.getItem('todos'));

        if(temp){
            this.setState({
                todos: temp
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem}/>
                    <TodoList 
                        todos={this.state.todos} 
                        handleChangeProps = {this.handleChange} 
                        delTodoProps = {this.delTodo}
                        setUpdate = {this.setUpdate}
                    />
                </div>
            </div>
        );
    }
}

export default TodoContainer