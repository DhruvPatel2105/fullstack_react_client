import React, { useState } from "react";
import mutation from "../API/Mutation";
import Fetchdata from "../API/fetchdata";
import {Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const EmployeeCreate = ({ addEmployee }) => {
  const [error, setError] = React.useState({});
  const [navi, setNavi] = useState(false);
  const [empType, setEmpType] = useState("");
  // console.log("error", empType);

  const formSubmit = (e) => {
    e.preventDefault();
    const form = document.forms.empCreate;
    const newemp = {
      firstName: form.fname.value,
      lastName: form.lname.value,
      age: form.age.value,
      joiningDate: form.jdate.value,
      title: form.title.value,
      department: form.dept.value,
      empType: empType,
      CurrentStatus: 1,
    };
    const err = {};
    let valid = true;
    if (!newemp.firstName) {
      err.firstName = "Firstname is required";

      valid = false;
    }
    if (!newemp.lastName) {
      err.lastName = "lastName is required";
      valid = false;
    }
    if (!newemp.age) {
      err.age = "age is required";
      valid = false;
    } else if (parseInt(newemp.age) < 20 || parseInt(newemp.age) > 70) {
      err.age = "age should be beetween 20 and 70";
      valid = false;
    }
    if (!newemp.joiningDate) {
      err.joiningDate = "joiningDate is required";
      valid = false;
    }
    if (!newemp.title) {
      err.title = "Please Select proper title";
      valid = false;
    }
    if (!newemp.department) {
      err.department = "Please select proper department";
      valid = false;
    }
    if (!newemp.empType) {
      err.empType = "Please select proper employee type";
      valid = false;
    }

    if (valid) {
      const query = mutation(newemp);
      Fetchdata(query).then(async function (response) {
        const body = await response.json();
        addEmployee(body.data.postEmployee);
        setNavi(true);
      });
      form.reset();
      setError({});
    } else {
      setError(err);
    }
  };

  if (navi) {
    return <Navigate to="/" />;
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
        {error
          ? Object.values(error).map((e) => <p className="text-danger">{e}</p>)
          : ""}
        <div className="col">
          <Form.Label className="p-1 pt-2">First Name</Form.Label>
          <Form.Control
            type="text"
            className="form-control  border-dark"
            name="fname"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <Form.Label className="p-1 pt-2">Last Name</Form.Label>
          <Form.Control
            type="text"
            className="form-control  border-dark"
            name="lname"
            placeholder="Last name"
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
          />
        </div>
        <div className="col">
          <Form.Label className="p-1 pt-2">Date of Joining</Form.Label>
          <Form.Control
            type="Date"
            className="form-control border-dark"
            name="jdate"
            placeholder="Joining Date"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Label className="p-1 pt-2">Title</Form.Label>
          {empType == "Contract" || empType == "Seasonal" ? (
            <Form.Select
              id="inputState"
              className="form-control border-dark"
              name="title"
            >
              <option value="Employee">Employee</option>
            </Form.Select>
          ) : (
            <Form.Select
              id="inputState"
              className="form-control border-dark"
              name="title"
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
            id="inputState"
            className="form-control border-dark"
            name="dept"
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

          <Form.Select
            id="inputState"
            className="form-control border-dark"
            name="empType"
            value={empType}
            onChange={(e) => setEmpType(e.target.value)}
          >
            <option value="">----</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
          </Form.Select>
        </div>
      </div>
      <Button type="submit" variant="secondary" className="btn btn-primary w-100 my-3 lead">
        Submit
      </Button>
    </Form>
  );
};

export default EmployeeCreate;
