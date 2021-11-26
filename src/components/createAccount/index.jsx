import * as C from "./style";
import { useHistory } from "react-router-dom";
import createAccountBack from "../../assets/images/create-account-back.svg";
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoMailOutline,
  IoChevronForward,
  IoCloseSharp,
} from "react-icons/io5";

const LoGin = () => {
  const history = useHistory();
  const handleRenderingLogin = () => history.push("/");
  const handleRenderingAccount = () => history.push("/create_account/account");
  return (
    <C.Div className="body">
      <C.Img src={createAccountBack} />
      <C.Section>
        <C.Div className="container">
          <C.Form>
            <C.Div className="title">
              <C.Span>
                <IoCloseSharp
                  onClick={handleRenderingLogin}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    background: "#F25C5C",
                    borderRadius: "3px",
                  }}
                />
              </C.Span>
              <C.H1>Create Account.</C.H1>
              <C.Span>Share your thoughts with the world from today</C.Span>
            </C.Div>
            <C.Div className="socials">
              <C.Span>Continue With</C.Span>
              <C.Div className="social_authentication">
                <C.Div>
                  <IoLogoFacebook
                    style={{ color: "#F25C5C", width: "20px", height: "20px" }}
                  />
                  <C.Span>Facebook</C.Span>
                </C.Div>
                <C.Div>
                  <IoLogoGoogle
                    style={{ color: "#F25C5C", width: "20px", height: "20px" }}
                  />
                  <C.Span>Google</C.Span>
                </C.Div>
                <C.Div>
                  <IoMailOutline
                    style={{ color: "#F25C5C", width: "20px", height: "20px" }}
                  />
                  <C.Span>Email address</C.Span>
                </C.Div>
              </C.Div>
            </C.Div>
            <C.Div className="account">
              <C.Span>Already have an account?</C.Span>
              <C.Span onClick={handleRenderingAccount}>
                Log in
                <IoChevronForward className="IoChevronForward" />
              </C.Span>
            </C.Div>
            <C.Footer>
              <C.Span>
                By register you agree with our terms and conditions and privacy
                policy
              </C.Span>
            </C.Footer>
          </C.Form>
        </C.Div>
      </C.Section>
    </C.Div>
  );
};

export default LoGin;
