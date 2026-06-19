import { useState } from "react";
import type { User } from "../types/user";
import { filterUsers, type UserRoleFilter } from "../utils/userFilters";
import { UserCard } from "./UserCard";

type UserDirectoryProps = {
  users: User[];
};

export function UserDirectory({ users }: UserDirectoryProps) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<UserRoleFilter>("all");
  const [activeOnly, setActiveOnly] = useState(false);

  const matchingUsers = filterUsers(users, query, role, activeOnly);

  return (
    <div className="section">
      <h2>User Directory</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => setQuery(e.target.value as string)}
        style={{ marginRight: "10px" }}
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value as UserRoleFilter)}
        style={{ marginRight: "10px" }}
      >
        <option value="all">all</option>
        <option value="admin">admin</option>
        <option value="annotator">annotator</option>
        <option value="verifier">verifier</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={(e) => setActiveOnly(e.target.checked)}
        />
        Active users only
      </label>

      <p style={{ marginTop: "10px" }}>{matchingUsers.length} matching users</p>

      {matchingUsers.length > 0 ? (
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {matchingUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "10px", color: "red" }}>No users found</p>
      )}
    </div>
  );
}
