import React from "react";
import logo from "../imgs/image 3.png";
import { HEADER, Menu, LinkMenu, LinkMenuAtual } from "../styles/HeaderStyles";

class Header extends React.Component {
  render() {
    return (
      <>
        <HEADER>
          <img src={logo} alt="teste"></img>
          <Menu>
            <li>
              <LinkMenuAtual href="/">Home</LinkMenuAtual>
            </li>
            <li>
              <LinkMenu href="/">Personagens</LinkMenu>
            </li>
          </Menu>
        </HEADER>
      </>
    );
  }
}
export default Header;
