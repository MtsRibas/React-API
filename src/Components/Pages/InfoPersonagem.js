import axios from "axios";
import React from "react";
import { Tudo, BotaoVoltar } from "../styles/InfoPersonagemStyles";

class InfoPersonagens extends React.Component {
  state = {
    character: null,
  };

  componentDidMount() {
    this.pegarDetalhesPersonagem();
  }

  pegarDetalhesPersonagem = async () => {
    try {
      const resposta = await axios.get(
        `https://rickandmortyapi.com/api/character/${this.props.id}`
        // Recebendo o id do personagem
      );

      this.setState({ character: resposta.data });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { character } = this.state;

    if (!character) {
      return <p>Acho que esse Personagem nao existe</p>;
    }

    return (
      <Tudo>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <BotaoVoltar onClick={this.props.voltarParaLista}>Voltar</BotaoVoltar>
      </Tudo>
    );
  }
}
export default InfoPersonagens;
