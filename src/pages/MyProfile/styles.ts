import styled from "styled-components";

export const ContainerMyProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyProfileSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ProfileTitle = styled.h1`
  font-size: 36px;

  @media (max-width: 430px) {
    font-size: 30px;
  }
`;

export const ProfileSubTitle= styled.h3`
  font-size: 14px;
`;

export const ContainerImgProfile = styled.div`
  height: 200px;
  width: 200px;
  margin: 30px 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  @media (max-width: 430px) {
    height: 150px;
    width: 150px;
  }
`;

export const MyProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileButton = styled.button`
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
