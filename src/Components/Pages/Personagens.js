import axios from "axios";
import React from "react";
import Header from "../Header/Header"; 
import styled from "styled-components";

const Teste = styled.div`
  background-color: #1a1a1a;
  display: grid;
  grid-template-columns: repeat(4, 18rem);
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  color: #ffffff;
  padding: 10px;
`;

const P = styled.a`
  color: #aeaeae;
  text-decoration: underline;
  /* font-size: 10px; */
  display: flex;
  flex-direction: row;
  font-size: 10px;
  cursor: pointer;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Div2 = styled.div`
  display: flex;
  gap: 10px;

  margin-right: 40px;
  align-items: center;
`;

const CharacterName = styled.p`
  margin: 0;
  color: #ffffff;
`;

const CharacterStatus = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const Circle = styled.span`
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

export class Personagens extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  pegarPersonagens = () => {
    axios
      .get("https://rickandmortyapi.com/api/character", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resposta) => {
        this.setState({ characters: resposta.data.results });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const renderizarCharacter = this.state.characters.map((c) => {
      return (
        <Card key={c.id}>
          <img src={c.image} alt="Imagem personagem" />
          <Div>
            <Div2>
              <CharacterName>{c.name}</CharacterName>
              <CharacterStatus>
                <Circle status={c.status} />
                {c.status}
              </CharacterStatus>
            </Div2>
            <P>More info</P>
          </Div>
        </Card>
      );
    });

    return (
      <>
        <Header />
        <Teste>{renderizarCharacter}</Teste>
      </>
    );
  }
}export default Personagens;
