const QUERY = `query GetEmployees {
    getEmployees {
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
  }`;
const getQueryByEmpId = (id) => `query GetSingleEmployee {
   getSingleEmployee (id: "${id}"){   
     id 
     firstName  
     lastName 
      age  
      joiningDate 
      title 
      department 
      CurrentStatus 
      empType  }}
   `;

export { getQueryByEmpId, QUERY as default };
