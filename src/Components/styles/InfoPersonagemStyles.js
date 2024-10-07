import styled from "styled-components";

export const Tudo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 1005;
  color: white;
  img {
    width: 100%;
    border-radius:16px 0px 0px 16px;
  }
  margin-top: 50px;
  background-color:#1a1a1a;
  border-radius:16px;
`;

export const NomePerso = styled.p`
  font-size: 64px;
`;

export const BotaoVoltar = styled.button`
  background-color: #009d3e;
  color: white;
  padding: 8px 32px;
  border: none;
  border-radius: 4px;
  align-self: flex-start;


  cursor: pointer;
  &:hover {
    background-color: #008e3b;
  }
`;

export const Infos = styled.div`
  padding-left: 50px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom:2rem;
`;
