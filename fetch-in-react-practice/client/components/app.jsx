import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(res => res.json())
      .then(task => {
        this.setState({
          todos: task
        });
      })
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * add the created todo to the state array.
     *
     * TIP: Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(task => {
        this.setState({
          todos: this.state.todos.concat(task)
        });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the matching todo in the state array.
     * Find its "isCompleted" status.
     * Make a new Object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in state.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        const status = { isCompleted: !this.state.todos[i].isCompleted };
        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(status)
        })
          .then(res => res.json())
          .then(data => {
            const newData = this.state.todos.map(data => data);
            newData.splice(i, 1, data);
            this.setState({ todos: newData });
          })
          .catch(err => console.error(err));
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
