import React from "react"
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Inputtodo from "./Inputtodo";
import Todoslist from "./Todoslist";

class Todoapp extends React.Component {

    state = {
        todos: [
        ]
       };

       
       handleChange = id => {

        console.log("clicked",id);
        this.setState(prevState => ({

            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                    ...todo,
                    completed: !todo.completed,
                    }
                }
                return todo
            })

        }))
      };

      delTodo = id => {
        console.log("deleted", id);

        this.setState({    
            todos: [      
                ...this.state.todos.filter(todo => {        
                    return todo.id !== id;      
                })    
            ]});

      };

      addTodoItem = title => {
        console.log("new todo item: " + title);
        const newtodo = {
            id: uuidv4(),
            title:title,
            completed:false
        };
        this.setState({
            todos: [...this.state.todos,newtodo]
        })
      };

      setUpdate = (updatedTitle, id) => {
        console.log("updated title: " + updatedTitle, id);
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          }),
        })
      }

      componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
      }

      componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
      }
      
  render() {
    return (
        <>
            <div className="container" >
                <div className="inner">
                    <Header/>
                    <br/>
                    <Inputtodo addTodoProps={this.addTodoItem}/>
                    <Todoslist todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                        setUpdate= {this.setUpdate}
                    />
                </div>
            </div>
      </>
    )
  }
}
export default Todoapp