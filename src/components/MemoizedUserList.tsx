import React, { useCallback, useMemo, useRef, useState } from "react";
import type { User } from "../types/user";
import { computeUserStats } from "../utils/expensiveUserStats";
import { usePrevious } from "../hooks/usePrevious";

type UserRowProps = {
  user: User;
  onSelect: (userId: number) => void;
};

const UserRow = React.memo(function UserRow({ user, onSelect }: UserRowProps) {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ cursor: "pointer" }} onClick={() => onSelect(user.id)}>
        <strong>{user.name}</strong> - {user.email}
      </div>
      <small>Render count: {renderCount.current}</small>
    </li>
  );
});

export function MemoizedUserList({ users }: { users: User[] }) {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [tick, setTick] = useState(0);
  const stats = useMemo(() => computeUserStats(users), [users]);
  //   const stats = computeUserStats(users);

  const handleSelect = useCallback((userId: number) => {
    setSelectedUserId(userId);
  }, []);
//   const handleSelect = (userId: number) => setSelectedUserId(userId);

  const previousSelection = usePrevious(selectedUserId);

  return (
    <div className="section">
      <h2>Memoized User List</h2>
      <button type="button" onClick={() => setTick((t) => t + 1)}>
        Tick (parent re-render: {tick})
      </button>
      <div style={{ margin: "12px 0" }}>
        <p>Total: {stats.total}</p>
        <p>Active: {stats.activeCount}</p>
        <p>
          Roles — admin: {stats.roleCounts.admin}, annotator:{" "}
          {stats.roleCounts.annotator}, verifier: {stats.roleCounts.verifier}
        </p>
      </div>
      <p>Selected: {selectedUserId ?? "None"}</p>
      <p>Previous selection: {previousSelection ?? "None"}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <UserRow key={user.id} user={user} onSelect={handleSelect} />
        ))}
      </ul>
    </div>
  );
}
