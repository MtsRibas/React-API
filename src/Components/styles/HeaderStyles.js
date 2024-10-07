import styled from "styled-components";

export const HEADER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding-top:1rem;
`;

export const LinkMenuAtual = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 2px solid #319956;
  }
`;
export const Foto = styled.img`
  height: 50px;
`;
