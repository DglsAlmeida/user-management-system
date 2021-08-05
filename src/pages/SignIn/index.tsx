import React from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import * as yup from "yup";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().trim().required(),
});

export const SignIn = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const handleFormData = useCallback(
    async (data: SignInFormData) => {
      await signIn({
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
              data-testid="input-email"
              error={!!errors.email?.message}
              {...register("email")}
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              data-testid="input-password"
              error={!!errors.password?.message}
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
