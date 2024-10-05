import React from "react";
import { Header } from "./Components/Header/header";
import Banner from "./Components/imgs/BannerPrincipal2.svg";
import styled from "styled-components";

const TesteImagem = styled.div`
  background-image: url(${Banner});
  height: 610px;

  background-position: center;
`;

const Teste1 = styled.div`
  background-color: black;
  margin-top: -10px;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 43px;
`;

const Botao = styled.button`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TesteImagem />

        <Teste1>
          <Botao>Personagens</Botao>
        </Teste1>
      </div>
    );
  }
}

export default App;
