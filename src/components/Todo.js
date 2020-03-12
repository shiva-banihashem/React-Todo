import React from "react";

const Todo = props => {
    console.log("in Todo")
    console.log(props)

//Kept this for my reference
//   let displayClassName = "item";
//   if (props.item.completed) {
//     displayClassName = displayClassName + " completed";
//   }

  const handleClick = () => {
    props.toggleCompleted(props.item.id);
  };

  if (!props.item.task) {
      return null;
  }
     return (
    
    //Kept this line for my reference
    // <div onClick={handleClick} className={DisplayClassName}>
    <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
      );
  
    
};

export default Todo;
