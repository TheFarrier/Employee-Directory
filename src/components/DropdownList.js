import React from "react";
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";


function DropdownList(props) {
  return (
      <Dropdown as={ButtonGroup}>
        <Button variant="secondary" onClick={() => props.sort("department")}>
          Department
        </Button>
        <Dropdown.Toggle split variant="secondary" id="dropdown-basic" />
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=> props.filterby("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={()=> props.filterby("Sales")}>Sales</Dropdown.Item>
          <Dropdown.Item onClick={()=> props.filterby("Logistics")}>Logistics</Dropdown.Item>
          <Dropdown.Item onClick={()=> props.filterby("Human Resources")}>Human Resources</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default DropdownList;