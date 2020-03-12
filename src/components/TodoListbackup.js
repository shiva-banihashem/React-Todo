import React from "react";

import Todo from "./Todo";

const TodoList = props => {

  console.log(props.tasks)
  return (
    <div className="todo-list">
      {props.tasks.map(item => (
        
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
          clearCompleted={props.clearCompleted}
        />
      ))}
      
    </div>
  );
};

export default TodoList;