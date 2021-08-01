import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import api from "../services/api";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  image: string;
  role: string;
}

interface AuthState {
  accessToken: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user?: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@UserManagement:token");
    const user = localStorage.getItem("@UserManagement:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get("users");

    const userFiltered = response.data.find(
      (user: any) =>
        user.user.email === email && user.user.password === password
    );

    if (userFiltered) {
      const { token, user } = userFiltered;
      console.log(token, user);
      localStorage.setItem("@UserManagement:token", token);
      localStorage.setItem("@UserManagement:user", JSON.stringify(user));

      setData({ token, user });
    } else {
      console.error("Incorrect user!");
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@UserManagement:token");
    localStorage.removeItem("@UserManagement:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
