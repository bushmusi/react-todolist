import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';
import NoMatch from "../pages/NoMatch";
import About from "../pages/About";
import Navbar from "./Navbar";

const TodoContainer = props => {

    const getInitialTodos = () => {
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    }
    const [todos, setTodos ] = useState(getInitialTodos());

    const handleChange = (id) => {
        setTodos(prevState => 
            prevState.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item;
            })
        )
    }

    const delTodo = (id) => {
        setTodos([
            ...todos.filter(item => {
                return item.id !== id;
            })
        ])
    }

    const addTodoItem = title => {
        const item = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        setTodos([
            ...todos,item
        ])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map( item => {
                if( item.id === id){
                    item.title = updatedTitle
                }
                return item
            })
        )
    }

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos',temp);
    },[todos]);

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem}/>
                            <TodoList 
                                todos={todos} 
                                handleChangeProps = {handleChange} 
                                delTodoProps = {delTodo}
                                setUpdate = {setUpdate}
                            />
                        </div>
                    </div>
                </Route>
                <Route path='/About' component={About}>
                </Route>
                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </>
    );
}

export default TodoContainer