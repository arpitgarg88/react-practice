import { useEffect, useRef } from "react";

export function useFocusOnMount<T extends HTMLElement>(): {
  ref: React.RefObject<T>;
} {
  const ref = useRef<T>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return { ref };
}
