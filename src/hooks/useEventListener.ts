import { useEffect, useRef } from "react";

type EventTargetType = Window | Document | HTMLElement;

export function useEventListener<K extends keyof WindowEventMap>(
  target: EventTargetType,
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): void {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event: Event) => {
      handlerRef.current(event as WindowEventMap[K]);
    };

    target.addEventListener(eventName, listener, options);

    return () => {
      target.removeEventListener(eventName, listener, options);
    };
  }, [target, eventName, options]);
}
