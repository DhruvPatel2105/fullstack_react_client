import React, { useEffect, useState } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";

const EmployeeDirectory = ({ employees, deleteEmployee }) => {
  let newEmployees = employees;
  const [filter, setFilter] = useState("");

  if (filter) {
    newEmployees = employees.filter((emp) => emp.empType == filter);
  }
  return (
    <div>
      <EmployeeSearch setFilter={setFilter} />

      <EmployeeTable Employees={newEmployees} deleteEmployee={deleteEmployee} />
    </div>
  );
};

export default EmployeeDirectory;
