import type { User, UserRole } from "../types/user";

export type UserRoleFilter = "all" | UserRole;

export function filterUsers(
  users: User[],
  query: string,
  role: UserRoleFilter,
  activeOnly: boolean,
): User[] {
  const search = query.trim().toLowerCase();

  return users.filter((user) => {
    const matchesSearch =
      search === "" ||
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search);

    const matchesRole = role === "all" || user.role === role;
    const matchesActive = !activeOnly || user.isActive;

    return matchesSearch && matchesRole && matchesActive;
  });
}
