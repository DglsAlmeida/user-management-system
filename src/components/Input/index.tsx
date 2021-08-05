import React from "react";
import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";
import { forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: boolean
}

export const Input = forwardRef(({ name, icon: Icon, error, ...rest  }: InputProps, ref) => {
  return (
    <Container error={error}>
      {Icon && <Icon size={18} />}
      <input data-testid="input-element" name={name} {...rest} />
    </Container>
  );
});
