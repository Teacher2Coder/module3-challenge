// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employees = [];
// Collect employee data
const collectEmployees = function() {
  let again = true;

  while (again) {
    // User inputs data for employee
    const fName = prompt("Enter employee's first name:") ;
    const lName = prompt("Enter  employee's last name:") ;
    let sal = prompt("Enter employee's salary:") ;
    // Default to zero if no data is put in
    if (isNaN(sal)) {
      sal = 0;
    }
    // Create an employeeData object
    const employeeData = {
      firstName: fName,
      lastName: lName,
      // Convert the salary string to a float
      salary: parseFloat(sal)
    } ;
    // Add the employeeData object to the array
    employees.push(employeeData) ;
    // Ask the user if they want to add another
    again = confirm("Do you want to add another employee?");
  }
  // Return the employee data
  return employees;
}

// Display the average salary
var average = 0 ;
const displayAverageSalary = function(employeesArray) {
  let total = 0;
  const count = employeesArray.length;

  // Calculate the total
  for (const employee of employeesArray) {
    total += employee.salary;
  }

  // Calculate the average salary
  const average = total / count;

  // Log the average to the console
  console.log (`The average employee salary between our ${count} employee(s) is $${average.toFixed(2)}`) ;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const random = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log (`Congratulations to ${random.firstName} ${random.lastName}, our random drawing winner!`) ;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
