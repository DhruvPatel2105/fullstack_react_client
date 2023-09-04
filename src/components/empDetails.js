import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getQueryByEmpId } from "../API/Query";
import Fetchdata from "../API/fetchdata";
import getRetirementTime from "../customComponent/retirement";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const EmpDetails = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const query = getQueryByEmpId(id);
  useEffect(() => {
    Fetchdata(query)
      .then((res) => res.json())
      .then((res) => setState(res.data.getSingleEmployee));
  }, []);

  const Timeleft = getRetirementTime(state.joiningDate, state.age);
  return (
    <div>
      <Table className="table table-dark w-50 m-auto mt-5 ">
        <tbody>
          <tr>
            <th scope="row">First Name</th>
            <td>{state.firstName}</td>
          </tr>
          <tr>
            <th scope="row">Last Name</th>
            <td>{state.lastName}</td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td>{state.age}</td>
          </tr>
          <tr>
            <th scope="row">Date Of Joining</th>
            <td>{state.joiningDate}</td>
          </tr>
          <tr>
            <th scope="row">Title</th>
            <td>{state.title}</td>
          </tr>
          <tr>
            <th scope="row">Department</th>
            <td>{state.department}</td>
          </tr>
          <tr>
            <th scope="row">Employee Type</th>
            <td>{state.empType}</td>
          </tr>
          <tr>
            <th scope="row"> Current Status</th>
            <td>{state.CurrentStatus ? "Working" : "Non-Working"}</td>
          </tr>
          <tr>
            <th scope="row"> Retirement Time Left</th>
            <td>
              {` ${Timeleft.year ? `(${Timeleft.year}) Years,` : ""} ${
                Timeleft.month ? `(${Timeleft.month}) Months,` : ""
              } ${Timeleft.day ? `(${Timeleft.day}) days` : ""} `}
            </td>
          </tr>
          <tr className="bg-light text-dark ">
            <td scope="row" className="bg-light text-dark">
              <Link to="/">
                <Button variant="secondary" type="button">GO TO HOME PAGE</Button>
              </Link>
            </td>
            <td scope="row" className="bg-light text-dark">
              <Link to={`/edit/${id}`}>
                <Button variant="secondary" type="button">Edit</Button>
              </Link>
              &nbsp;
              <Link to={`/delete/${id}`}>
              
                <Button variant="secondary" type="button">Delete</Button>{" "}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default EmpDetails;
