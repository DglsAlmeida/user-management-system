import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input = ({ name, icon: Icon, ...rest }: InputProps) => {
  return (
    <Container>
      {Icon && <Icon size={18} />}
      <input name={name} {...rest} />
    </Container>
  );
};
