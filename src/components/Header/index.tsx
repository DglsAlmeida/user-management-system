import React from 'react';
import {
  ButtonLogout,
  ContainerImg,
  HeaderContainer,
  HeaderContent,
  HeaderProfileContent,
  ProfileTitle,
} from "./styles";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../hooks/AuthContext";

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderProfileContent>
          <ContainerImg>
            <img src={user?.image} alt={user?.username} />
          </ContainerImg>
          <ProfileTitle to="my-profile">My Profile</ProfileTitle>

          <ProfileTitle to="users-list">Users List</ProfileTitle>
        </HeaderProfileContent>

        <ButtonLogout onClick={signOut}>
          <BiLogOut size={32} />
        </ButtonLogout>
      </HeaderContent>
    </HeaderContainer>
  );
};
