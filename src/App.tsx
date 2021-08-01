import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
