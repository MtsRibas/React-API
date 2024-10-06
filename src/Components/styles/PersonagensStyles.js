import styled from "styled-components";

export const DivPersonagens = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  gap: 30px;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid rgb(174, 174, 174, 20%);
  border-radius: 4px;
  color: #ffffff;
  padding: 10px;
`;

export const LinkInfo = styled.a`
  color: #aeaeae;
  text-decoration: underline;
  /* font-size: 10px; */
  display: flex;
  flex-direction: row;
  font-size: 10px;
  cursor: pointer;
  padding: 10px;
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

export const DadosPersonagem = styled.div`
  display: flex;
  gap: 10px;

  margin-right: 40px;
  align-items: center;
  /* border: 1px solid blue; */
`;

export const CharacterName = styled.p`
  margin: 0;
  color: #ffffff;
  align-items:center;
`;

export const CharacterStatus = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.status === "Alive") return "green";
    if (props.status === "Dead") return "red";
    return "gray";
  }};
  margin-right: 5px;
`;
export const InputPesquisa = styled.input`
  background-color: transparent;
  color: #696969;
  border: 1px solid #aeaeae;
  height: 30px;
  padding-right: 20%;
  border-radius: 5px;
`;
export const DivPesquisa = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 8%;
`;

export const Busca = styled.p`
  color: white;
  padding-right: 1%;
`;

export const Filtros = styled.select`
  background-color: transparent;
  color: white;
  border-color: 1px solid green;
`;
export const Opcoes = styled.option`
  background-color: red;
`;
