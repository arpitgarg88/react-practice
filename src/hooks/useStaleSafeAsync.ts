import { useEffect, useRef, useState } from "react";
import type { AsyncRunStatus } from "../types/timer";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useStaleSafeAsync() {
  const [status, setStatus] = useState<AsyncRunStatus>("idle");
  const [resultLabel, setResultLabel] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const requestIdRef = useRef(0);

  useEffect(() => {
    return () => {
      requestIdRef.current++;
    };
  }, []);

  async function run(ms: number, label: string) {
    const requestId = ++requestIdRef.current;

    setStatus("loading");
    setResultLabel(null);
    setErrorMessage(null);

    await delay(ms);

    if (requestId !== requestIdRef.current) return;

    setStatus("success");
    setResultLabel(label);
  }

  function cancel() {
    requestIdRef.current++;

    setStatus("idle");
    setResultLabel(null);
    setErrorMessage(null);
  }

  return {
    status,
    resultLabel,
    errorMessage,
    runFast: () => run(300, "Fast response"),
    runSlow: () => run(2000, "Slow response"),
    cancel,
  };
}
