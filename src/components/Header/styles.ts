import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #00BFA6;
  height: 80px;
  width: 100vw;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 80px;

  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

export const HeaderProfileContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerImg = styled.div`
  height: 65px;
  margin-right: 20px;

  img { 
    height: 65px;
    width: 65px;
    border-radius: 50%;
  }

  @media (max-width: 430px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 320px) {
    width: 50px;
  }
`;

export const ProfileTitle = styled(Link)`
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  & + a {
    margin-left: 15px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ButtonLogout = styled.button`
  border: 0;
  background: transparent;

  @media (max-width: 600px) {
   svg {
     height: 28px;
   }
  }
`;