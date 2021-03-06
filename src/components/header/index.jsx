import * as C from "./style";
import logo from "../../assets/images/logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [IoMenus, setIoMenus] = useState(true);
  const [IoCloses, setIoCloses] = useState(false);

  const handleMenuHamburguer = () => {
    setIoMenus(!IoMenus);
    setIoCloses(!IoCloses);
  };

  const history = useHistory();
  const handleRenderingLogin = () => history.push("/create_account");

  return (
    <C.Header>
      <C.Div className="logo">
        <C.Img src={logo} />
      </C.Div>
      <IoMenu
        className={IoMenus ? "on" : "off"}
        onClick={handleMenuHamburguer}
      />
      <IoClose
        className={IoCloses ? "on" : "off"}
        onClick={handleMenuHamburguer}
      />
      <C.Nav popup={IoCloses}>
        <C.Ul>
          <C.Li>PRODUCT</C.Li>
          <C.Li>FEATURES</C.Li>
          <C.Li>PRICING</C.Li>
          <C.Li className="login" onClick={handleRenderingLogin}>
            LOGIN
          </C.Li>
        </C.Ul>
      </C.Nav>
    </C.Header>
  );
};

export default Header;
