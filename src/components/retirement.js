import React, { useState } from "react";
import getRetirementTime from "../customComponent/retirement";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';



const Retirement = ({ Employees }) => {
  const [empFilter, setEmpfilter] = useState("");
  const NewEmployee = Employees.map((e) => {
    e.time = getRetirementTime(e.joiningDate, e.age);
    return e;
  }).sort((a, b) => a.time.totalDays - b.time.totalDays);
  return (
    <div>
      <Form.Select
        id="inputState"
        className="form-control border-dark mt-5"
        name="empType"
        value={empFilter}
        onChange={(e) => {
          setEmpfilter(e.currentTarget.value);
        }}
      >
        <option value="">Retire Soon</option>
        <option value="FullTime">FullTime</option>
        <option value="PartTime">PartTime</option>
        <option value="Contract">Contract</option>
        <option value="Seasonal">Seasonal</option>
      </Form.Select>
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
            <th scope="col">Retirement Time Left</th>
          </tr>
        </thead>

        <tbody>
          {NewEmployee.filter((emp) =>
            empFilter
              ? emp.empType == empFilter
              : emp.time.month < 6 && emp.time.year == 0
          ).map((emp, i) => (
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
                {` ${emp.time.year ? `(${emp.time.year}) Years,` : ""} ${
                  emp.time.month ? `(${emp.time.month}) Months,` : ""
                } ${emp.time.day ? `(${emp.time.day}) days` : ""} `}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Retirement;
