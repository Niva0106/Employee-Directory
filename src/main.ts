import employees from "./employees.js";
import { searchEmployees } from "./search.js";
import type { Employee } from "./types.js";

const employeeList = document.getElementById("employee-list");
const searchElement = document.getElementById("search-input");

if (!(searchElement instanceof HTMLInputElement)) {
  throw new Error("Search input element not found");
}

const searchInput: HTMLInputElement = searchElement;

function displayEmployees(employeeData: Employee[]): void {
  if (!employeeList) return;

  employeeList.innerHTML = "";

  employeeData.forEach((employee) => {
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

function handleSearch(): void {
  const searchTerm = searchInput.value;

  const filteredEmployees = searchEmployees(employees, searchTerm);

  displayEmployees(filteredEmployees);
}

searchInput.addEventListener("input", handleSearch);

displayEmployees(employees);