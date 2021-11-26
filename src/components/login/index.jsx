import * as C from "./style";
import { IoCloseSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import Background from "../../assets/images/create-account-back.svg";

const Login = () => {
  const history = useHistory();
  const handleDirectionLogin = () => history.push("/create_account/account");
  return (
    <C.Div className="body">
      <C.Img src={Background} />
      <C.Section>
        <C.Div>
          <C.Span>
            <C.H2>Sign up</C.H2>
            <IoCloseSharp
              onClick={handleDirectionLogin}
              className="IoCloseSharp"
            />
          </C.Span>
          <C.Span>Sign up with Google</C.Span>
        </C.Div>
        <C.Form>
          <C.Fieldset>
            <C.Div className="email">
              <C.Label>Email</C.Label>
              <C.Input type="email" />
            </C.Div>
            <C.Div className="password">
              <C.Label>Password</C.Label>
              <C.Input type="password" />
            </C.Div>
            <C.Div className="check">
              <C.Div className="checkbox">
                <C.Label>
                  <C.Input type="checkbox" /> I agree with Terms and Privacy
                </C.Label>
              </C.Div>
              <C.Button type="submit">Sign up</C.Button>
            </C.Div>
          </C.Fieldset>
        </C.Form>
      </C.Section>
    </C.Div>
  );
};

export default Login;
