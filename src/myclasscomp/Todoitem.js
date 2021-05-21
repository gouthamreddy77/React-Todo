import React, { Component } from 'react'

export default class Todoitem extends Component {

    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = event => {
        console.log(event.key)
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up...")
    }

    render() {


        let conditionaldisplaay = {"display":"none"}

        const { completed, id, title } = this.props.todo

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }


        return (
            <div className="item">
                <li>
                    <div onDoubleClick={this.handleEditing} style={ this.state.editing ? conditionaldisplaay : null}>

                        <input type="checkbox" checked={completed}
                            onChange={()=>  this.props.handleChangeProps(id) }
                            className="checkbox"
                        /> 

                        <span style={completed ? completedStyle : null}>
                            {title}
                        </span>
                        
                        <button   onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                        </button>
                    </div>

                    <input type="text" style={!this.state.editing ? conditionaldisplaay : null} className="textInput" value={title}
                            onChange={e => {
                                this.props.setUpdate(e.target.value,id)
                            }}
                            onKeyDown={this.handleUpdatedDone}
                    />
                </li>
            </div>
        )
    }
}
