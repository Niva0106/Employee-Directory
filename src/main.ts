import employees from "./employees.js";

const employeeList = document.getElementById("employee-list");

function displayEmployees(): void {
  if (!employeeList) return;

  employeeList.innerHTML = "";

  employees.forEach((employee) => {
    const employeeCard = document.createElement("div");

    employeeCard.innerHTML = `
      <h2>${employee.name}</h2>
      <p>Role: ${employee.role}</p>
      <p>Department: ${employee.department}</p>
      <p>Email: ${employee.email}</p>
      <p>μLearn ID: ${employee.muId}</p>
    `;

    employeeList.appendChild(employeeCard);
  });
}

displayEmployees();