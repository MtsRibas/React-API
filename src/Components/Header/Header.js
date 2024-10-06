import React from "react";
import logo from "../imgs/image 3.png";
import { HEADER, Menu, LinkMenuAtual } from "../styles/HeaderStyles";

class Header extends React.Component {
  render() {
    return (
      <>
        <HEADER>
          <a href="/">
            <img src={logo} alt="teste" />
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
