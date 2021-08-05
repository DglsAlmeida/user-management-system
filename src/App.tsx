import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import Routes from "./routes";
import { UsersProvider } from "./hooks/UsersListContext";

const App = () => {
  return (
    <Router>
      <UsersProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </UsersProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
