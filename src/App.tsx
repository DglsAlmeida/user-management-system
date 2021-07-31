// import { Users } from "./pages/Users";
import { GlobalStyle } from './styles/global';
import { SignIn } from "./pages/SignIn";
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
  <AuthProvider>
    <GlobalStyle />
    <SignIn />
  </AuthProvider>
  )
}


export default App;
