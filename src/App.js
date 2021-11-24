import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
