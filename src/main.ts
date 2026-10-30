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
    employeeCard.className = "employee-card";

    employeeCard.innerHTML = `
      <h2>${employee.name}</h2>
      <p>Role: ${employee.role}</p>
      <p>Department: ${employee.department}</p>
      <p>Email: ${employee.email}</p>
      <p>μLearn ID: ${employee.muId ?? "Not provided"}</p>
    `;

    employeeList.appendChild(employeeCard);

    if (employeeData.length === 0) {
    employeeList.innerHTML = `
        <p class="empty-message">No employees found.</p>
    `;
    return;
    }
  });
}

function handleSearch(): void {
  const searchTerm = searchInput.value;

  const filteredEmployees = searchEmployees(employees, searchTerm);

  displayEmployees(filteredEmployees);
}

searchInput.addEventListener("input", handleSearch);

displayEmployees(employees);