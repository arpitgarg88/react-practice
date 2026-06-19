import { useRef, useState } from "react";
import { useEventListener } from "../hooks/useEventListener";

export function WindowShortcutHint() {
  const [message, setMessage] = useState("Press ? to show help");
  const timeoutRef = useRef<number | null>(null);

  const clearExistingTimeout = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  useEventListener(window, "keydown", (event) => {
    const hasModifier = event.ctrlKey || event.metaKey || event.altKey;

    if (event.key === "?" && !hasModifier) {
      clearExistingTimeout();
      setMessage("Shortcut help: Ctrl+S save, Esc cancel");
      timeoutRef.current = window.setTimeout(() => {
        setMessage("Press ? to show help");
      }, 3000);
    }
  });

  return (
    <div className="section">
      <h2>Shortcut Hint</h2>
      <p>{message}</p>
    </div>
  );
};