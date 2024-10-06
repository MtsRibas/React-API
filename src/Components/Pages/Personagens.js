import axios from "axios";
import React from "react";
import Header from "../Header/Header";
import InfoPersonagens from "./InfoPersonagem";
import {
  Busca,
  DivPesquisa,
  InputPesquisa,
  DivPersonagens,
  Card,
  LinkInfo,
  DivInfo,
  DadosPersonagem,
  CharacterName,
  CharacterStatus,
  Circle,
  Filtros,
  Opcoes,
} from "../styles/PersonagensStyles";

export class Personagens extends React.Component {
  state = {
    characters: [],
    pesquisa: "",
    selecionarPersonagemPorId: null,
    filtros: "",
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  pegarPersonagens = async () => {
    try {
      let allCharacters = [];
      let page = 1;
      let NextPage = true;

      while (NextPage) {
        const resposta = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        allCharacters = [...allCharacters, ...resposta.data.results];
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
  };

  selecionarPersonagem = (id) => {
    this.setState({ selecionarPersonagemPorId: id });
  };

  voltarParaLista = () => {
    this.setState({ selecionarPersonagemPorId: null });
  };
  onChangeFiltro = (e) => {
    this.setState({ filtros: e.target.value });
  };

  render() {
    const { characters, pesquisa, selecionarPersonagemPorId, filtros } =
      this.state;

    if (selecionarPersonagemPorId) {
      return (
        <>
          <Header />
          <InfoPersonagens
            id={selecionarPersonagemPorId}
            voltarParaLista={this.voltarParaLista}
          />
        </>
      );
    }

    const filteredCharacters = characters
      .filter((c) => c.name.toLowerCase().includes(pesquisa.toLowerCase()))
      .filter((c) => {
        if (filtros === "Vivos") {
          return c.status === "Alive";
        }
        if (filtros === "Mortos") {
          return c.status === "Dead";
        }
        if (filtros === "Desconhecido") {
          return c.status === "unknown";
        }
        return true;
      });

    const renderizarCharacter = filteredCharacters.map((c) => {
      return (
        <Card key={c.id}>
          <img src={c.image} alt={c.name} />
          <DivInfo>
            <DadosPersonagem>
              <CharacterName>{c.name}</CharacterName>
              <CharacterStatus>
                <Circle status={c.status} />
                {c.status}
              </CharacterStatus>
            </DadosPersonagem>
            <LinkInfo onClick={() => this.selecionarPersonagem(c.id)}>
              More info
            </LinkInfo>
          </DivInfo>
        </Card>
      );
    });

    return (
      <>
        <Header />
        <DivPesquisa>
          <Busca>Search</Busca>
          <InputPesquisa
            name="pesquisa"
            placeholder="Buscar personagem"
            onChange={this.onChangePesquisa}
            value={pesquisa}
          />
        </DivPesquisa>
        <Filtros onChange={this.onChangeFiltro} value={filtros}>
          <Opcoes value="">Selecione um filtro</Opcoes>
          <Opcoes value="Vivos">Vivos</Opcoes>
          <Opcoes value="Mortos">Mortos</Opcoes>
          <Opcoes value="Desconhecido">Desconhecido</Opcoes>
        </Filtros>

        <DivPersonagens>{renderizarCharacter}</DivPersonagens>
      </>
    );
  }
}

export default Personagens;
