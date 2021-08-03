import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface UsersProviderProps {
  children: ReactNode;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  position: string;
  age: string;
}

interface UsersContextData {
  addUser: (newUser: Users) => void;
  removeUser: (userId: string) => void;
  usersList: Users[];
  // updateUser: () => void;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

const UsersProvider = ({ children }: UsersProviderProps) => {
  const [usersList, setUsersList] = useState<Users[]>(() => {
    const users = localStorage.getItem('@UsersList:users');

    if (users) { 
      return JSON.parse(users);
    }

    return [];
  });

  const addUser = useCallback(
    (newUser: Users) => {
      const updatedUsersLists= [...usersList, {
        ...newUser,
        id: uuidv4(),
      }]
      localStorage.setItem('@UsersList:users', JSON.stringify(updatedUsersLists));
      setUsersList(updatedUsersLists);
    },
    [usersList]
  );

  const removeUser = useCallback(
    (userId) => {
      const usersArray = [...usersList];
      const index = usersArray.findIndex((user) => user.id === userId);

      if (index !== -1) {
        usersArray.splice(index, 1);
        setUsersList(usersArray);
      } else {
        console.error("User doesn't exist");
      }
    },
    [usersList]
  );

  // const updateUser = useCallback(() => {}, []);

  return (
    <UsersContext.Provider value={{ usersList, addUser, removeUser }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within an UsersProvider");
  }

  return context;
};

export { UsersProvider, useUsers };
