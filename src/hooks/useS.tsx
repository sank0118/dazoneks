import { useState, useRef, useMemo, useCallback } from "react";

const useS = () => {
  const [value, setValue] = useState("");

  const message = useMemo(() => {
    if (value.length === 0) {
      return "값을 입력하세요.";
    }
    return null;
  }, [value]);

  const ref = useRef<HTMLInputElement>(null);

  const Component = useCallback(() => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
      />
    );
  }, [value, ref]);

  return { ref, Component };
};

export default useS;
