import styled from "styled-components";

export const Tudo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: white;
  img{
    width: 40%;
  }
`;

export const NomePerso = styled.p`
  font-size: 70px;
`

export const BotaoVoltar = styled.button`
  background-color: green;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`;