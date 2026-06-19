import { useState } from "react";
import type { LoadState, SimulatedUser } from "../types/api";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function useSimulatedUser(): {
  state: LoadState;
  user: SimulatedUser | null;
  errorMessage: string | null;
  loadSuccess: () => Promise<void>;
  loadFailure: () => Promise<void>;
  reset: () => void;
} {
  const [state, setState] = useState<LoadState>("idle");
  const [user, setUser] = useState<SimulatedUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function loadSuccess(): Promise<void> {
    setState("loading");
    setErrorMessage(null);
    await delay(1000);
    setUser({ id: 1, name: "Demo User" });
    setState("success");
  }

  async function loadFailure(): Promise<void> {
    setState("loading");
    setUser(null);
    await delay(1000);
    setErrorMessage("Simulated network error");
    setState("error");
  }

  function reset(): void {
    setState("idle");
    setUser(null);
    setErrorMessage(null);
  }

  return {
    state,
    user,
    errorMessage,
    loadSuccess,
    loadFailure,
    reset,
  };
}
