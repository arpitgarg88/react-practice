import { useStaleSafeAsync } from "../hooks/useStaleSafeAsync";

export function SimulatedUserLoader() {
  const { status, resultLabel, errorMessage, runFast, runSlow, cancel } =
    useStaleSafeAsync();

  const isLoading = status === "loading";

  return (
    <div className="section">
      <h2>Simulated User Loader</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button type="button" disabled={isLoading} onClick={runFast}>
          Run fast
        </button>
        <button type="button" disabled={isLoading} onClick={runSlow}>
          Run slow
        </button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </div>

      <p>Status: {status}</p>
      {resultLabel && <p>{resultLabel}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
