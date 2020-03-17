import React from "react";

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemSearch:""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      itemName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.itemName !== "") {
      this.props.addItem(this.state.itemName);
      this.setState({
        itemName: ""
      });
    }
  };

  handleClearCompleted = e=> {
    e.preventDefault();
      this.props.clearCompleted();
  }
  
  searchOnChange = (e) => {
    this.setState({
        itemSearch: e.target.value
      });
  }

  let filteredList = workerList.filter(worker =>
    worker.fullName.toLowerCase().indexOf(workerSearch.toLowerCase()) !== -1)
  

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">Task to be added:</label>
        <input className="inputSearch"
            type="text"
            placeholder="Search Todo Tasks..." 
            value={workerSearch}
            onChange={searchOnChange}
          
          />
        <input
          onChange={this.handleChanges}
          type="text"
          name="item"
          id="item"
          value={this.state.itemName}
        />
        <button>Add</button>
        <button onClick={this.handleClearCompleted}>
        Clear Completed
      </button>
      </form>
    );
  }
}

export default TodoForm;

