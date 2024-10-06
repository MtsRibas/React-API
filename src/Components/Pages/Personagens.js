import axios from "axios";
import React from "react";
import Header from "../Header/Header";
import { Teste, Card, P, Div, Div2, CharacterName, CharacterStatus, Circle } from "../styles/PersonagensStyles"; 

export class Personagens extends React.Component {
  state = {
    characters: [],
    pesquisa: ""
  };

  onChangePesquisa = (e) => {
    this.setState({ pesquisa: e.target.value })
  }

  /*onClickProximaPagina = () =>{
    this.setState({characters : })
  }*/  

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
    const filteredCharacters = this.state.characters.filter((c) =>
      c.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
    );//converter tudo inserindo no input para minusculo pra não dar conflito na pesquisa

    const renderizarCharacter = filteredCharacters.map((c) => {
      return (
        <Card key={c.id}>
          <img src={c.image} alt={c.name} />
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

        <input
          name="pesquisa"
          placeholder="Buscar personagem"
          onChange={this.onChangePesquisa}
          value={this.state.pesquisa}
        />

        <Teste>{renderizarCharacter}</Teste>
        {/*<button onClick={onClickProximaPagina}>Próxima página</button>*/}  
      </>
    );
  }
} export default Personagens;
