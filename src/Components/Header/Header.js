import React from "react";
import logo from "../imgs/image 3.png";
<<<<<<< HEAD:src/Components/Header/header.js
import { HEADER, Lista, Link } from "../styles/HeaderStyles"
=======

const HEADER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 120px;
`;
const Lista = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover{
    border-bottom: 2px solid #319956;
  }
`;
>>>>>>> 4eeb170327c1499e974eba85c525a63925709d5d:src/Components/Header/Header.js

const LinkAtual = styled.a`
  text-decoration: none;
  border-bottom: 2px solid #319956;
  color: white;
`;


class Header extends React.Component {
  render() {
    return (
      <>
        <HEADER>
          <img src={logo} alt="teste"></img>
          <Lista>
            <li>
              <LinkAtual href="/">Home</LinkAtual>
            </li>
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