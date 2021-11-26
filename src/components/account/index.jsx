import * as C from "./style";
import { useHistory } from "react-router-dom";
import { IoCloseSharp, IoChevronForwardOutline } from "react-icons/io5";
import accountBackground from "../../assets/images/create-account-back.svg";

const Account = () => {
  const history = useHistory();
  const handleDirectionAccount = () => history.push("/create_account");
  const handleDirectionLogin = () => history.push("/account/login");
  return (
    <C.Div className="body">
      <C.Img src={accountBackground} />
      <C.Section>
        <C.Form>
          <C.Span className="icon">
            <IoCloseSharp
              className="oCloseSharp"
              onClick={handleDirectionAccount}
            />
          </C.Span>
          <C.Div className="txt">
            <C.H1>Create Account.</C.H1>
            <C.Span>Share your thoughts with the world from today.</C.Span>
          </C.Div>
          <C.Fieldset>
            <C.Div>
              <C.Label>Name</C.Label>
              <C.Input type="text" />
            </C.Div>
            <C.Div>
              <C.Label>Email</C.Label>
              <C.Input type="email" />
            </C.Div>
            <C.Div>
              <C.Label>Password</C.Label>

              <C.Input type="password" maxLength="17" />
            </C.Div>
            <C.Div className="password">
              <C.Span>
                8+ letters with a mixture of both uppercase and lowercase
                letters.
              </C.Span>
            </C.Div>
            <C.Div className="btn">
              <C.Span onClick={handleDirectionLogin}>
                Already have an account? Log in
                <IoChevronForwardOutline className="IoChevronForwardOutline" />{" "}
              </C.Span>
              <C.Button type="submit">Sign up</C.Button>
            </C.Div>
          </C.Fieldset>
          <C.Span>
            By register you agree with our terms and conditions and privacy
            policy
          </C.Span>
        </C.Form>
      </C.Section>
    </C.Div>
  );
};

export default Account;
