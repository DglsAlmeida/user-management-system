import { Input } from "../../components/Input";
import { Button, Container, ImgContainer, SignInContainerContent, SignInForm, SignInPageContent, Title } from "./styles";
import teamPage from "../../assets/team_page.svg";

export const SignIn = () => {
  return (
    <Container>
      <SignInContainerContent>
      <ImgContainer>
        <img src={teamPage} alt="team page logo" />
      </ImgContainer>
      <Title>Faça seu Login</Title>
      <SignInPageContent>
        <SignInForm>
          <Input name="name" type="text" placeholder="Nome"/>
          <Input name="email" type="email" placeholder="E-mail"/>
          <Input name="password" type="password" placeholder="Senha"/>
          <Button>Entrar</Button>
        </SignInForm>
      </SignInPageContent>

      </SignInContainerContent>
    </Container>
  );
};
