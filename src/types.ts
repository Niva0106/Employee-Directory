export interface Employee {
  name: string;
  role: string;
  department: Department;
  email: string;
  muId: string | null;
}

export type Department =
  | "Engineering"
  | "Design"
  | "Human Resources"
  | "Marketing";