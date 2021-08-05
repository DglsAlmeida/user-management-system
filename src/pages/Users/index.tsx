import { Header } from "../../components/Header";
import { BsTrash } from "react-icons/bs";
import {
  Container,
  CreateUsersButton,
  UserDescription,
  UsersContent,
  TableContainer,
  Table,
} from "./styles";
import { useAuth } from "../../hooks/AuthContext";
import Modal from "react-modal";
import ModalCard, { ModalHandles } from "../../components/ModalCard";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { Users as UsersSearch, useUsers } from "../../hooks/UsersListContext";
import { ModalContent } from "../../components/ModalContent";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../../components/Input";


Modal.setAppElement("#root");
export const Users = () => {
  const modalRef = useRef<ModalHandles>(null);
  const { user } = useAuth();
  const { usersList, removeUser } = useUsers();

  const [search, setSearch] = useState("");
  const [filteredUsersList, setFilteredUsersList] = useState<UsersSearch[]>(
    []
  );

  const openModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const closeModal = useCallback(() => {
    modalRef.current?.closeModal();
  }, []);

  useEffect(() => {
    const filtered = usersList.filter((users) => {
      return users.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredUsersList(filtered);
  }, [search, usersList]);

  return (
    <>
      <Header />
      <Container>
        <UsersContent>
          <UserDescription>
            <Input
              name="search"
              icon={AiOutlineSearch}
              type="text"
              placeholder="Search"
              onChange={(event) => setSearch(event.target.value)}
            />
            {user?.role === "ADMIN" && (
              <CreateUsersButton onClick={openModal}>
                Add user
              </CreateUsersButton>
            )}
          </UserDescription>
          <TableContainer>
            <Table data-testid="users-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Position</th>
                  <th>Age</th>
                  {user?.role === "ADMIN" && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {filteredUsersList.map((users) => (
                  <tr key={users.id}>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.position}</td>
                    <td>{users.age}</td>
                    {user?.role === "ADMIN" && (
                      <td>
                        <button onClick={() => removeUser(users.id)}>
                          <BsTrash size={20} />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </UsersContent>
        <ModalCard ref={modalRef}>
          <ModalContent closeModal={closeModal} />
        </ModalCard>
      </Container>
    </>
  );
};
