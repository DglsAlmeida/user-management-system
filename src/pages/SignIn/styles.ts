import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`;

export const SignInContainerContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  background: #00BFA6;
  padding: 30px 60px;

  @media (max-width: 430px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    padding: 0;
    font-size: 16px;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 250px;
  }

  @media (max-width: 430px) {
    margin-bottom: 40px;

    img {
      width: 200px;
    }
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #202020;

  @media (max-width: 430px) {
    font-size: 18px;
  }
`;

export const SignInPageContent = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 15px;
  border: 0;
  font-size: 18px;
  padding: 17px 24px;
  width: 340px;
  height: 56px;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  background: #202020;
  color: #fff;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 430px) {
    width: 300px;
    height: 40px;
    padding: 0;
    font-size: 16px;
  }

`;