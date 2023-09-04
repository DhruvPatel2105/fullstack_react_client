const mutation = (newemp) => ` mutation Mutation {  postEmployee ( 
 firstName:"${newemp.firstName}", 
lastName:"${newemp.lastName}",
age: ${newemp.age},
joiningDate: "${newemp.joiningDate}",
title: "${newemp.title}",
department: "${newemp.department}",
empType: "${newemp.empType}",
CurrentStatus:1) {
  id
    firstName,
    lastName,
    age,
    joiningDate,
    title,
    department,
    empType,
    CurrentStatus
}}`;

const MutationForSingleEmployee = (newEmp) => `mutation Mutation{
    updateEmployee(
        id: "${newEmp.id}",
        title: "${newEmp.title}",
        CurrentStatus: ${newEmp.CurrentStatus},
        department: "${newEmp.department}")
         {
     id
      firstName
      lastName
      age
      joiningDate
      title
      department
      empType
      CurrentStatus
      
    }
  }
  `;
const getDeleteMutation = (id) => `mutation deleteEmployee {
    deleteEmployee(id:"${id}")
   }`;

export { MutationForSingleEmployee, getDeleteMutation, mutation as default };
