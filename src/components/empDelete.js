import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Fetchdata from "../API/fetchdata";
import { getDeleteMutation } from "../API/Mutation";


const EmpDelete = ({ deleteEmployee }) => {
  const id = useLocation().pathname.split("/")[2];
  useEffect(() => {
    Fetchdata(getDeleteMutation(id))
      .then((res) => res.json())
      .then((res) => deleteEmployee(id));
  }, []);
  return <Navigate to="/" />;
};

export default EmpDelete;
