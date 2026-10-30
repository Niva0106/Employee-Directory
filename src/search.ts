import type { Employee } from "./types.js";

export function searchEmployees(
  employees: Employee[],
  searchTerm: string
): Employee[] {

  const search = searchTerm.toLowerCase().trim();

  return employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(search) ||
      employee.role.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      (employee.muId?.toLowerCase().includes(search) ?? false)
    );
  });
}