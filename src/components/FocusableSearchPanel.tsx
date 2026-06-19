import { useState } from "react";
import { useFocusOnMount } from "../hooks/useFocusOnMount";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type FocusableSearchPanelProps = {
  panelTitle: string;
  placeholder?: string;
};

export function FocusableSearchPanel({
  panelTitle,
  placeholder = "Search",
}: FocusableSearchPanelProps) {
  const [query, setQuery] = useState<string>("");
  const { ref } = useFocusOnMount<HTMLInputElement>();

  useDocumentTitle(`${panelTitle} — Hooks Practice`);

  return (
    <div className="section">
      <h2>{panelTitle}</h2>

      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value as string)}
      />
    </div>
  );
}
