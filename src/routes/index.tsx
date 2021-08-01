import { Switch } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Users } from "../pages/Users";
import Route from "./Route";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/users-list" component={Users} isPrivate/>
    </Switch>
  );
};

export default Routes;
