import React, { useCallback, useRef } from "react";
import { Input, Props as InputProps } from "./TextInput";
import { InputWrapper, InputWrapperProps } from "./Container";

export interface UTIP extends InputWrapperProps {
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
  inputProps?: InputProps;
}

const useMyInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const focus = useCallback(
    () => setTimeout(() => ref.current?.focus(), 100),
    [ref]
  );

  const Component = useCallback(
    ({ id, onChange, title, value, className, inputProps, message }: UTIP) => {
      const wrapperProps = { id, message, title };
      return (
        <InputWrapper {...wrapperProps}>
          <Input
            ref={ref}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={className}
            {...inputProps}
            {...wrapperProps}
          />
        </InputWrapper>
      );
    },
    [ref]
  );

  return { ref, focus, Component };
};

export default useMyInput;
