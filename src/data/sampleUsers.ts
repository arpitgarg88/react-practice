import type { User } from "../types/user";

export const sampleUsers: User[] = [
  {
    id: 1,
    name: "ALICE",
    email: "Alice@Example.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 2,
    name: "bOb",
    email: "BOB@example.com",
    role: "annotator",
    isActive: false,
  },
  {
    id: 3,
    name: "Carol",
    email: "carol@example.com",
    role: "verifier",
    isActive: true,
  },
  {
    id: 4,
    name: "David",
    email: "david@example.com",
    role: "annotator",
    isActive: true,
  },
  {
    id: 5,
    name: "eva",
    email: "eva@example.com",
    role: "admin",
    isActive: false,
  },
  {
    id: 6,
    name: "Frank",
    email: "frank@example.com",
    role: "verifier",
    isActive: true,
  },
  {
    id: 7,
    name: "Grace",
    email: "grace@example.com",
    role: "annotator",
    isActive: false,
  },
];
