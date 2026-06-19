import { useMemo, useState } from "react";
import type { User } from "../types/user";
import { filterUsers } from "../utils/userFilters";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { UserCard } from "./UserCard";

export function DebouncedUserSearch({ users }: { users: User[] }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);
  const matchingUsers = useMemo(
    () => filterUsers(users, debouncedQuery, "all", false),
    [users, debouncedQuery],
  );

  return (
    <div className="section">
      <h2>Debounced User Search</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => setQuery(e.target.value as string)}
      />

      <p>Typed: {query}</p>
      <p>Searching: {debouncedQuery}</p>

      {matchingUsers.length > 0 ? (
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {matchingUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
