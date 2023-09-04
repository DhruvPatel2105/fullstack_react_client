import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


const EmployeeSearch = ({ setFilter }) => {
  return (
    <div>
      <Form>
        <Form.Select
          id="inputState"
          className="form-control border-dark mt-5"
          name="empType"
          onChange={(e) => {
            setFilter(e.currentTarget.value);
          }}
        >
          <option value="">All Employees</option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </Form.Select>
      </Form>
    </div>
  );
};

export default EmployeeSearch;
