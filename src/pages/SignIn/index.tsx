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
import { useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";

interface SignInFormData {
  email: string;
  password: string;
}

export const SignIn = () => {

  const { user, signIn } = useContext(AuthContext);

  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormData = useCallback((data: SignInFormData) => {
    signIn({
      email: data.email,
      password: data.password,
    });
  }, [signIn]);

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
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
            <Input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <Button type="submit">Entrar</Button>
          </SignInForm>
        </SignInPageContent>
      </SignInContainerContent>
    </Container>
  );
};
