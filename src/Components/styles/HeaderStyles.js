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
`;

export const LinkMenuAtual = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 2px solid #319956;
  }
`;
