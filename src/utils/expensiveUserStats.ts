import type { User } from "../types/user";

export type UserStats = {
  total: number;
  activeCount: number;
  roleCounts: Record<User["role"], number>;
};

export function computeUserStats(users: User[]): UserStats {
    let number = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    number = number + i;
  }
  console.log(`Expensive computation: ${number}`);

  const activeCount = users.filter((user) => user.isActive).length;
  const roleCounts: UserStats["roleCounts"] = {
    admin: 0,
    annotator: 0,
    verifier: 0,
  };
  for (const user of users) {
    roleCounts[user.role]++;
  }

  return {
    total: users.length,
    activeCount: activeCount,
    roleCounts: roleCounts,
  };
}
