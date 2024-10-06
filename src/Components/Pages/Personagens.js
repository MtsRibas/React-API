import axios from "axios";
import React from "react";
import Header from "../Header/Header";
import { Teste, Card, P, Div, Div2, CharacterName, CharacterStatus, Circle } from "../styles/PersonagensStyles"; 

export class Personagens extends React.Component {
  state = {
    characters: [], 
    pesquisa: "",
  };

  componentDidMount() {
    // Carrega os dados para serem exibidos na página logo que ela inicia
    this.pegarPersonagens(); 
  }

  pegarPersonagens = async () => {
    try {
      let allCharacters = []; 
      let page = 1;
      let NextPage = true; 

      while (NextPage) {
        // Enquanto tem mais páginas, ele adiciona no vetor de caracteres
        const resposta = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        allCharacters = [...allCharacters, ...resposta.data.results]; 
        // Verifica próxima página
        NextPage = !!resposta.data.info.next; 
        page++; 
      }

      this.setState({ characters: allCharacters });
    } catch (err) {
      console.log(err.message);
    }
  };

  onChangePesquisa = (e) => {
    this.setState({ pesquisa: e.target.value }); 
  }; // Adicionado ponto e vírgula aqui

  render() {
    const { characters, pesquisa } = this.state;

    const filteredCharacters = characters.filter((c) =>
      // Converter tudo inserindo no input para minúsculo para não dar conflito na pesquisa
      c.name.toLowerCase().includes(pesquisa.toLowerCase())
    );

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
          value={pesquisa}
        />

        <Teste>{renderizarCharacter}</Teste>
      </>
    );
  }
}

export default Personagens;
