import axios from "axios";
import React from "react";
import {
  Tudo,
  BotaoVoltar,
  NomePerso,
  Infos,
  
} from "../styles/InfoPersonagemStyles";


class InfoPersonagens extends React.Component {
  state = {
    character: null,
    isLoading: false,
  };

  componentDidMount() {
    this.pegarDetalhesPersonagem();
  }

  pegarDetalhesPersonagem = async () => {
    this.setState({ isLoading: true });
    try {
      const resposta = await axios.get(
        `https://rickandmortyapi.com/api/character/${this.props.id}`
      );

      this.setState({ character: resposta.data, isLoading: false });
    } catch (err) {
      console.log(err.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { character, } = this.state;

    if (!character) {
      return <p>Acho que esse Personagem não existe</p>;
    }

    return (
      <Tudo>
        <img src={character.image} alt={character.name} />

        <Infos>
          <NomePerso>{character.name}</NomePerso>
          <p>Status: {character.status}</p>
          <p>Espécies: {character.species}</p>
          <p>Gênero: {character.gender}</p>
          <p>Origem: {character.origin.name}</p>
          <p>Localização: {character.location.name}</p>
          <BotaoVoltar onClick={this.props.voltarParaLista}>Voltar</BotaoVoltar>
        </Infos>
      </Tudo>
    );
  }
}

export default InfoPersonagens;
