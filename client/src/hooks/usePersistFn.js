import { useRef } from "react";

/**
 * usePersistFn 可以替代 useCallback 以降低心智负担
 */
export function usePersistFn(fn) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const persistFn = useRef(null);
  if (persistFn.current) {
    persistFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return persistFn.current;
}
