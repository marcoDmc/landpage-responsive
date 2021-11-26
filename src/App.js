import Home from "./pages/Home";
import Account from "./pages/CreateAccount";
import CreateAccount from "./pages/Account";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create_account" component={Account} />
        <Route exact path="/create_account/account" component={CreateAccount} />
        <Route exact path="/account/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
