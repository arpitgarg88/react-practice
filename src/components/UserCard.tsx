import type { User } from "../types/user";

export function UserCard({ user }: { user: User }) {
  return (
    <li
      style={{
        width: "400px",
        border: "1px solid #2e303a",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>
        {user.name} - {user.email}
      </p>
      <p>Role: {user.role}</p>
      <p style={{ color: user.isActive ? "#3ba03b" : "#c51e1e" }}>
        {user.isActive ? "Active" : "Inactive"}
      </p>
    </li>
  );
}
