import React from "react";
import styled from "styled-components";
import logo from "../imgs/image 3.png";

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