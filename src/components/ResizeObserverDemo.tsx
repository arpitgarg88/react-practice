import { useLayoutEffect, useRef, useState } from "react";

type Size = {
  width: number;
  height: number;
};

export function ResizeObserverDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const updateSize = () => {
      setSize({
        width: Math.round(element.getBoundingClientRect().width),
        height: Math.round(element.getBoundingClientRect().height),
      });
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2>Resize Observer Demo</h2>

      <div>
        <strong>Size:</strong> {size.width} x {size.height}
      </div>

      <div
        ref={containerRef}
        style={{
          width: "300px",
          height: "150px",
          resize: "both",
          overflow: "auto",
          border: "2px solid #333",
          padding: "12px",
          boxSizing: "border-box",
          minWidth: "150px",
          minHeight: "100px",
        }}
      >
        Drag to resize this box.
      </div>
    </div>
  );
}
