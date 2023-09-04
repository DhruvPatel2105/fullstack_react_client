import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Fetchdata from "./API/fetchdata";
import QUERY from "./API/Query";
import EmployeeDirectory from "./components/EmpployeeDirectory";
import EmployeeCreate from "./components/EmployeeCreate";
import Navbar from "./components/navbar";
import EmpDetails from "./components/empDetails";
import EmpEdit from "./components/empEdit";
import { getDeleteMutation } from "./API/Mutation";
import EmpDelete from "./components/empDelete";
import Retirement from "./components/retirement";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmp) => {
    setEmployees([...employees, newEmp]);
  };
  const deleteEmployee = (id) => {
    const newEmployees = employees.filter((e) => e.id != id);
    setEmployees(newEmployees);
  };
  const editEmployee = (emp) => {
    const newEmployees = employees.map((e) => (e.id == emp.id ? emp : e));
    setEmployees(newEmployees);
  };
  React.useEffect(() => {
    Fetchdata(QUERY)
      .then((res) => res.json())
      .then((res) => setEmployees(res.data.getEmployees));
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeDirectory
              employees={employees}
              deleteEmployee={deleteEmployee}
            />
          }
        />
        <Route path="/view/:id" element={<EmpDetails />} />
        <Route
          path="/edit/:id"
          element={<EmpEdit editEmployee={editEmployee} />}
        />
        <Route
          path="/delete/:id"
          element={<EmpDelete deleteEmployee={deleteEmployee} />}
        />
        <Route
          path="/addEmployee"
          element={<EmployeeCreate addEmployee={addEmployee} />}
        />
        <Route
          path="/retirement"
          element={<Retirement Employees={employees} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
