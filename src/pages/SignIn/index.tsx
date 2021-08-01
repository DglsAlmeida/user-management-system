import { Input } from "../../components/Input";
import {
  Button,
  Container,
  ImgContainer,
  SignInContainerContent,
  SignInForm,
  SignInPageContent,
  Title,
} from "./styles";
import teamPage from "../../assets/team_page.svg";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/AuthContext";
import { yupResolver } from '@hookform/resolvers/yup';
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import * as yup from 'yup';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export const SignIn = () => {
  const { signIn } = useAuth();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(SignInSchema)
  });

  const handleFormData = useCallback(
    (data: SignInFormData) => {
      signIn({
        email: data.email,
        password: data.password,
      });
    },
    [signIn]
  );

  return (
    <Container>
      <SignInContainerContent>
        <ImgContainer>
          <img src={teamPage} alt="team page logo" />
        </ImgContainer>
        <Title>Faça seu Login</Title>
        <SignInPageContent>
          <SignInForm onSubmit={handleSubmit(handleFormData)}>
            <Input
              {...register("email")}
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              {...register("password")}
              name="password"
              icon={BiLockAlt}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
          </SignInForm>
        </SignInPageContent>
      </SignInContainerContent>
    </Container>
  );
};
