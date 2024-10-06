import React from "react";
import logo from "../imgs/image 3.png";
import { HEADER, Lista, Link } from "../styles/HeaderStyles"

class Header extends React.Component {
  render() {
    return (
      <>
        <HEADER>
          <img src={logo} alt="teste"></img>
          <Lista>
            <li>
              <Link href="/">Personagens</Link>
            </li>
          </Lista>
        </HEADER>
      </>
    );
  }
}
export default Header;