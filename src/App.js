import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((r) => {
        if (r.status === 200) {
          this.setState({ todos: r.data });
        }
      });
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((r) => {
        this.setState({ todos: [...this.state.todos, r.data] });
      });
    /*this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });*/
  };

  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((r) => {
        this.setState({ todos: [...this.state.todos, r.data] });
      });
  };
  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delete={this.delete}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
