import React from "react";
import logo from "../imgs/Logoof1.svg";
import { HEADER, Menu, LinkMenuAtual, Foto } from "../styles/HeaderStyles";

class Header extends React.Component {
  render() {
    return (
      <>
        <HEADER>
          <a href="/">
            <Foto src={logo} alt="teste" />
          </a>
          <Menu>
            <li>
              <LinkMenuAtual href="/">Home</LinkMenuAtual>
            </li>
          </Menu>
        </HEADER>
      </>
    );
  }
}
export default Header;
