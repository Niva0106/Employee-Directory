export interface Employee {
  name: string;
  role: string;
  department: string;
  email: string;
  muId: string;
}

export type Department =
  | "Engineering"
  | "Design"
  | "Human Resources"
  | "Marketing";