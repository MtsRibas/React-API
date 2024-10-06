import styled from "styled-components";

export const Tudo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  color: white;
  img {
    width: 100%;
  }
  margin-top: 50px;
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
  padding-left: 10px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const TelaLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;
export const Loading = styled.img`
  width: 400px;
  margin-bottom: 20px;
`;
