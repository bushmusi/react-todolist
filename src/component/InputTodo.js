import React,{ Component } from "react";

class InputTodo extends Component {
    state = {
        title: '',
    };
    
    onInputChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
            this.setState({
                title : ''
            })
        }
        else {
            alert('Please write task first!!')
        }
    }

    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name="title"
                    placeholder="Write task here..."
                    value={this.state.title}
                    onChange={this.onInputChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo;