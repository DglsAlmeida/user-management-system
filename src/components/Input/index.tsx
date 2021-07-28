import { InputHTMLAttributes } from "react";
import { InputContent } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ children, ...rest }: InputProps) => {
  return (
  <InputContent {...rest}>
    {children}
  </InputContent>
  );
};
