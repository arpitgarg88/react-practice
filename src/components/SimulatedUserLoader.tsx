import { useSimulatedUser } from "../hooks/useSimulatedUser";

export function SimulatedUserLoader() {
  const { state, user, errorMessage, loadSuccess, loadFailure, reset } =
    useSimulatedUser();
  const isLoading = state === "loading";

  return (
    <div className="section">
      <h2>Simulated User Loader</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button type="button" disabled={isLoading} onClick={loadSuccess}>
          Load success
        </button>
        <button type="button" disabled={isLoading} onClick={loadFailure}>
          Load failure
        </button>
        <button type="button" disabled={isLoading} onClick={reset}>
          Reset
        </button>
      </div>

      {state === "loading" && <p>Loading...</p>}
      {state === "success" && user && <p>{user.name}</p>}
      {state === "error" && <p style={{ color: "red" }}>{errorMessage}</p>}
      {state === "idle" && <p>No user loaded</p>}
    </div>
  );
}
