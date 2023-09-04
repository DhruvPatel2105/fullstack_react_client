import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getQueryByEmpId } from "../API/Query";
import Fetchdata from "../API/fetchdata";
import { MutationForSingleEmployee } from "../API/Mutation";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const EmpEdit = ({ editEmployee }) => {
  const [empType, setEmpType] = useState("");

  const [state, setState] = useState({
    CurrentStatus: 0,
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    empType: "",
    joiningDate: "",
    title: "",
    department: "",
    Redirect: false,
  });
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const query = getQueryByEmpId(id);
  useEffect(() => {
    Fetchdata(query).then(async function (res) {
      const response = await res.json();
      setState(response.data.getSingleEmployee);
      setEmpType(response.data.getSingleEmployee.empType);
    });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    const newemp = {
      id: state.id,
      title: state.title,
      department: state.department,
      CurrentStatus: parseInt(state.CurrentStatus),
    };

    const query = MutationForSingleEmployee(newemp);
    Fetchdata(query)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data.updateEmployee);
        editEmployee(res.data.updateEmployee);
        setState({ ...state, Redirect: true });
      });
  };
  // console.log("state", state);
  if (state.Redirect) {
    return (
      <div>
        <Navigate to="/" />
      </div>
    );
  }
  return (
    <Form
      className="border  border-dark p-3"
      name="empCreate"
      onSubmit={formSubmit}
    >
      {empType == "Contract" || empType == "Seasonal" ? (
        <h2 className="text-danger">
          Contractor/Seasonal Employee Can’t be Manager/Director/VP.
        </h2>
      ) : (
        ""
      )}
      <div className="row">
        <div className="col">
          <Form.Label className="p-1 pt-2">First Name</Form.Label>
          <Form.Control
            type="text"
            className="form-control  border-dark"
            name="fname"
            placeholder="First name"
            disabled
            value={state.firstName}
          />
        </div>
        <div className="col">
          <Form.Label className="p-1 pt-2">Last Name</Form.Label>
          <Form.Control
            type="text"
            className="form-control  border-dark"
            name="lname"
            placeholder="Last name"
            disabled
            value={state.lastName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Label className="p-1 pt-2">Age</Form.Label>
          <Form.Control
            type="number"
            className="form-control  border-dark"
            name="age"
            placeholder="age"
            disabled
            value={state.age}
          />
        </div>
        <div className="col">
          <Form.Label className="p-1 pt-2">Date of Joining</Form.Label>
          <Form.Control
            type="text"
            className="form-control border-dark"
            name="jdate"
            placeholder="Joining Date"
            disabled
            value={state.joiningDate}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Label className="p-1 pt-2">Title</Form.Label>
          {empType == "Contract" || empType == "Seasonal" ? (
            <Form.Select
              id="titleInput"
              className="form-control border-dark"
              name="title"
              value={state.title}
              onChange={(e) => {
                setState({ ...state, title: e.target.value });
              }}
            >
              <option value="Employee">Employee</option>
            </Form.Select>
          ) : (
            <Form.Select
              id="titleInput"
              className="form-control border-dark"
              name="title"
              value={state.title}
              onChange={(e) => {
                setState({ ...state, title: e.target.value });
              }}
            >
              <option value="">----</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Director">Director</option>
              <option value="VP">VP</option>
            </Form.Select>
          )}
        </div>
        <div className="col">
          <Form.Label className="p-1 pt-2">Department</Form.Label>

          <Form.Select
            id="deptInput"
            className="form-control border-dark"
            name="department"
            value={state.department}
            onChange={(e) => {
              setState({ ...state, department: e.target.value });
            }}
          >
            <option value="">----</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
          </Form.Select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Label className="p-1 pt-2">Employee Type</Form.Label>
          <Form.Control
            type="text"
            className="form-control  border-dark"
            name="EmpType"
            placeholder="Last name"
            disabled
            value={state.empType}
          />
        </div>
        <div className="col">
          <Form.Label className="p-1 pt-2">Current Status</Form.Label>

          <Form.Select
            id="statusInput"
            className="form-control border-dark"
            name="currentStatus"
            value={state.CurrentStatus}
            onChange={(e) => {
              setState({ ...state, CurrentStatus: e.target.value });
            }}
          >
            <option value="">----</option>
            <option value="1">Working</option>
            <option value="0">non-working</option>
          </Form.Select>
        </div>
      </div>

      <Button type="submit" variant="secondary" className="btn btn-primary w-100 my-3 lead">
        Submit
      </Button>
    </Form>
  );
};

export default EmpEdit;
