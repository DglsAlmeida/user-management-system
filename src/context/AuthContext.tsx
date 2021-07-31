import { createContext, useCallback, useState } from "react";
import api from "../services/api";

interface AuthState {
  accessToken: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user?: object;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
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

    const userFiltered = response.data.filter(
      (user: any) =>
        user.user.email === email && user.user.password === password
    );

    if (userFiltered) {
      const { token, user } = userFiltered[0];
      console.log(token, user);
      localStorage.setItem("@UserManagement:token", token);
      localStorage.setItem("@UserManagement:user", JSON.stringify(user));
    } else {
      throw new Error("Incorrect user!");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
