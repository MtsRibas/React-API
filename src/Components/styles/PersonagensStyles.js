import styled from "styled-components";

export const DivPersonagens = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 23.5%);
  gap: 30px;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid rgb(174, 174, 174, 20%);
  border-radius: 4px;
  color: white;
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
  height: 2rem;
  padding: 0 2rem 0 1rem;
  border-radius: 8px;
`;
export const DivPesquisa = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

`;

export const Busca = styled.p`
  color: white;
`;

export const Filtros = styled.select`
  padding: 0.6rem;
  background-color: transparent;
  color: white;
  border: transparent;
  border-bottom: 2px solid white;
  ::selection{
    border: none;
  }
`;
export const Opcoes = styled.option`
  background-color: black;
`;

export const PesquisaFiltro = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const TituloSection = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 60px;
`