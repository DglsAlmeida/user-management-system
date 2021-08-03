import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: boolean
}

export const Input = ({ name, icon: Icon, error, ...rest  }: InputProps) => {
  return (
    <Container error={error}>
      {Icon && <Icon size={18} />}
      <input name={name} {...rest} />
    </Container>
  );
};
