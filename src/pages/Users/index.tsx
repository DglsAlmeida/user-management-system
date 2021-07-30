// import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { BsTrash } from 'react-icons/bs';
import {
  Container,
  CreateUsersButton,
  UserDescription,
  UsersTitle,
  UsersContent,
  TableContainer,
  Table,
} from "./styles";

export const Users = () => {
  return (
    <>
      <Header/>
      <Container>
        <UsersContent>
          <UserDescription>
            <UsersTitle>Lista de usuários</UsersTitle>
            <CreateUsersButton>Adicionar um usuário</CreateUsersButton>
          </UserDescription>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Posição</th>
                  <th>Idade</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Douglas Almeida</td>
                  <td>douglas@gmail.com</td>
                  <td>Software Developer</td>
                  <td>21</td>
                  <td>
                    <button>
                      <BsTrash size={20}/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Douglas Almeida</td>
                  <td>douglas@gmail.com</td>
                  <td>Software Developer</td>
                  <td>21</td>
                  <td>
                    <button>
                      <BsTrash size={20}/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Douglas Almeida</td>
                  <td>douglas@gmail.com</td>
                  <td>Software Developer</td>
                  <td>21</td>
                  <td>
                    <button>
                      <BsTrash size={20}/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Douglas Almeida</td>
                  <td>douglas@gmail.com</td>
                  <td>Software Developer</td>
                  <td>21</td>
                  <td>
                    <button>
                      <BsTrash size={20}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </TableContainer>
        </UsersContent>
      </Container>
    </>
  );
};
