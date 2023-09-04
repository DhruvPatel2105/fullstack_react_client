import React from "react";
import { Link, Navigate } from "react-router-dom";
import Fetchdata from "../API/fetchdata";
import { getDeleteMutation } from "../API/Mutation";
import Table from "react-bootstrap/Table"
import Button from 'react-bootstrap/Button';


const EmployeeTable = ({ Employees, deleteEmployee }) => {
  const deleteItem = (id, cstatus) => {
    console.log("status", cstatus);
    if (cstatus) {
      alert("Cannot Delete Active Emloyee");
      return;
    }
    Fetchdata(getDeleteMutation(id))
      .then((res) => res.json())
      .then((res) => {
        deleteEmployee(id);
      });
  };

  return (
    <Table className="table table-dark mt-2">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Date Of Joining</th>
          <th scope="col">Title</th>
          <th scope="col">Department</th>
          <th scope="col">Employee Type</th>
          <th scope="col">Current Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {Employees.map((emp, i) => (
          <tr key={emp.id}>
            <th scope="row">{i + 1}</th>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.age}</td>
            <td>{emp.joiningDate}</td>
            <td>{emp.title}</td>
            <td>{emp.department}</td>
            <td>{emp.empType}</td>
            <td>{emp.CurrentStatus ? "Working" : "non-Working"}</td>
            <td>
              <Link to={`/view/${emp.id}`}>
                <Button variant="secondary" type="button">View</Button>
              </Link>{" "}
              &nbsp;{" "}
              <Link to={`/edit/${emp.id}`}>
                <Button variant="secondary" type="button">Edit</Button>
              </Link>{" "}
              &nbsp;{" "}
              <Button
                type="button" variant="secondary" onClick={() => deleteItem(emp.id, emp.CurrentStatus)} >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;
