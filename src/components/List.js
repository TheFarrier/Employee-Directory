import React from "react";

function List({employees}) {
  return (
    <tbody>
      {employees.map(e=>(
        <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.position}</td>
          <td>{e.department}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default List;