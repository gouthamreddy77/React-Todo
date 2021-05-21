import React from 'react'
import Todoitem from './Todoitem'

class Todoslist extends React.Component {
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.todos.map( 
                            todo    => 
                            <Todoitem key={todo.id} todo={todo}
                                handleChangeProps={this.props.handleChangeProps}
                                deleteTodoProps={this.props.deleteTodoProps}
                                setUpdate={this.props.setUpdate}
                            />
                        ) 
                    }
                </ul>
            </>
        )
    }
}
export default Todoslist