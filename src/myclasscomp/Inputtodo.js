import React, { Component } from 'react'

export default class Inputtodo extends Component {

    state = {
        title: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
              title: "",
            })
          } else {
            alert("Please write item")
          }
    };

    onChange = e =>{
        console.log("Hello");
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <input type="text" placeholder="Add Todo..." 
                        name="title"
                        className="input-text"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <button className="input-submit">Submit</button>
                </form>
            </div>
        )
    }
}
