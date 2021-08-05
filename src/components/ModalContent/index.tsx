import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/UsersListContext";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";

import { Input } from "../Input";
import { Button, Form, TitleForm } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ModalContentProps {
  closeModal: () => void;
}

const CreateUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  position: yup.string().required(),
  age: yup.string().required(),
});

export const ModalContent = ({ closeModal }: ModalContentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateUserSchema),
  });
  const { addUser } = useUsers();

  const handleUserFormData = useCallback(
    (data) => {
      addUser(data);
      closeModal();
    },
    [addUser, closeModal]
  );

  return (
    <Form onSubmit={handleSubmit(handleUserFormData)}>
      <TitleForm>Create user</TitleForm>
      <Input
        error={!!errors.position?.message}
        {...register("name")}
        icon={BiUser}
        name="name"
        type="text"
        placeholder="Name"
      />
      <Input
        error={!!errors.position?.message}
        {...register("email")}
        name="email"
        icon={HiOutlineMail}
        type="email"
        placeholder="E-mail"
      />
      <Input
        error={!!errors.position?.message}
        {...register("position")}
        name="position"
        icon={MdWork}
        type="text"
        placeholder="Position"
      />
      <Input
        error={!!errors.position?.message}
        icon={AiOutlineNumber}
        {...register("age")}
        name="age"
        type="text"
        placeholder="Age"
      />
      <Button type="submit">Create</Button>
      <Button onClick={closeModal}>Cancel</Button>
    </Form>
  );
};
