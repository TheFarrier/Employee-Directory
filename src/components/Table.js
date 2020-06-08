import React from "react";
import List from "./List";
import employees from "./employees.json"

class Table extends React.Component{
  state = {
    employees: employees
  };

  sortby = (column) => {
    this.setState({
      employees: this.state.employees.sort((a,b)=>(a[column]>b[column]) ? 1 :-1)
    })
  };

  filter = (department => {

  })


  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" ><button onClick={() => this.sortby("id")}>ID</button></th>
            <th scope="col" ><button onClick={() => this.sortby("name")}>Name</button></th>
            <th scope="col" ><button onClick={() => this.sortby("position")}>Position</button></th>
            <th scope="col" ><button onClick={() => this.sortby("department")}>Department</button ></th>
          </tr>
        </thead>
        <List employees={this.state.employees}/>
      </table>
    );
  }
}

export default Table;