export type UserRole = "admin" | "annotator" | "verifier";

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
};
