import React from "react";
import List from "./List";
import employees from "./employees.json"

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <List employees={employees}/>
    </table>
  );
}

export default Table;