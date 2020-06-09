import React from "react";
import List from "./List";
import employees from "./employees.json"
import DropdownList from "./DropdownList";

class Table extends React.Component{
  state = {
    employees: employees
  };

  sortby = (column) => {
    this.setState({
      employees: this.state.employees.sort((a,b)=>(a[column]>b[column]) ? 1 :-1)
    })
  };

  filterby = (dept) => {
    if(dept === "All"){
      this.setState({
        employees: employees
      })
    } else {
      this.setState({
        employees: employees.slice().filter(e=>e.department === dept)
      })
    }
  };


  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" ><button className="btn btn-secondary btn-md" onClick={() => this.sortby("id")}>ID</button></th>
            <th scope="col" ><button className="btn btn-secondary btn-md" onClick={() => this.sortby("name")}>Name</button></th>
            <th scope="col" ><button className="btn btn-secondary btn-md" onClick={() => this.sortby("position")}>Position</button></th>
            <th scope="col" ><DropdownList filterby={this.filterby} sort={this.sortby}/></th>
          </tr>
        </thead>
        <List employees={this.state.employees}/>
      </table>
    );
  }
}

export default Table;