import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/AuthContext";
import {
  ContainerImgProfile,
  ContainerMyProfile,
  MyProfileForm,
  MyProfileSetting,
  ProfileButton,
  ProfileSubTitle,
  ProfileTitle,
} from "./styles";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const MyProfileSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().trim().min(6),
})

export const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const [emailState, setEmailState] = useState(user?.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MyProfileSchema)
  });

  const handleFormUpdate = useCallback(
    ({ email, password }) => {
      const newEmail = email !== undefined ? email : user?.email;
      const newPassword = password !== undefined ? password : user?.password;

      updateUser({
        id: user?.id,
        email: newEmail,
        password: newPassword,
      });
    },
    [updateUser, user?.email, user?.password, user?.id]
  );

  return (
    <>
      <Header />
      <ContainerMyProfile>
        <MyProfileSetting>
          <MyProfileForm onSubmit={handleSubmit(handleFormUpdate)}>
            <ProfileTitle>Account Setting</ProfileTitle>
            <ProfileSubTitle>Update your informations</ProfileSubTitle>
            <ContainerImgProfile>
              <img src={user?.image} alt="avatar" />
            </ContainerImgProfile>
            <Input
              data-testid="input-email"
              error={!!errors.email?.message}
              {...register("email")}
              type="text"
              name="email"
              icon={HiOutlineMail}
              value={emailState}
              onChange={(event) => setEmailState(event.target.value)}
            />
            <Input
              data-testid="input-password"
              {...register("password")}
              name="password"
              icon={BiLockAlt}
              type="password"
              placeholder="New Password"
            />

            <ProfileButton type="submit">Update</ProfileButton>
          </MyProfileForm>
        </MyProfileSetting>
      </ContainerMyProfile>
    </>
  );
};
