**Employee Management System client side**


Employee object should contain:
FirstName(string), LastName(string), Age(Integer), DateOfJoining(Date), Title(string),
Department(string), EmployeeType(string), CurrentStatus(bool) (ie working=1, retired=0)


Here is some of the components. 
• EmployeeDirectory => Parent Component, and it includes all other components,

• EmployeeSearch => This component, helps user to search Employee data based on certain conditions and parameters

• EmployeeTable => This component, will list Employee data based on the conditions declared in
EMployeeSearch component

• EmployeeCreate => This component will help to create new Employee records within EMS

• I use dynamic Composition technique to pass data across Child components and also between Parent to Child components.  

• EmployeeTable: (Sample of EmployeeTable)
| FirstName | LastName | Age | DateOfJoining | Title   | Department | EmployeeType | CurrentStatus |
|-----------|----------|-----|---------------|---------|------------|--------------|--------------|
| Demo      | Demo     | 20  | Jan 1, 2000   | Manager | IT         | FullTime     | 1            |
