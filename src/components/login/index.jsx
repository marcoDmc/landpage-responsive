import * as C from "./style";
import Teste from "../../assets/images/login.svg";
import { useHistory } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoMailOutline,
  IoChevronForward,
  IoCloseSharp,
} from "react-icons/io5";

const LoGin = () => {
  const history = useHistory();
  function teste() {
    history.push("/");
  }
  return (
    <C.Div className="formulario">
      <C.Section>
        <C.Div className="svg">
          <C.Img src={Teste} />
        </C.Div>
        <C.Div className="container">
          <C.Form>
            <C.Div className="title">
              <C.Span>
                <IoCloseSharp
                  onClick={teste}
                  style={{
                    color: "#0D1126",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
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
                    style={{ color: "#0D1126", width: "20px", height: "20px" }}
                  />
                  <C.Span>Facebook</C.Span>
                </C.Div>
                <C.Div>
                  <IoLogoGoogle
                    style={{ color: "#0D1126", width: "20px", height: "20px" }}
                  />
                  <C.Span>Google</C.Span>
                </C.Div>
                <C.Div>
                  <IoMailOutline
                    style={{ color: "#0D1126", width: "20px", height: "20px" }}
                  />
                  <C.Span>Email address</C.Span>
                </C.Div>
              </C.Div>
            </C.Div>
            <C.Div className="account">
              <C.Span>Already have an account?</C.Span>
              <C.Span>
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
