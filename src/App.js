import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const data = [{
  task: "",
  id: "",
  completed: false
}
]


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      tasks: data,
      
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
 
  

  toggleCompleted(itemId) {
    
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }

  clearCompleted = () => {
    
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    });
  };

  addItem = itemName => {
    

    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    });

    
  };

  render() {
    
    return (
      <div className="App">
        <div className="header">
          <h1>My Todo List</h1>
        </div>
        <div>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          
        />
      </div>
    );
  }
}

export default App;