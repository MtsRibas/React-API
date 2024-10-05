import styled from "styled-components";
import React from "react";
import Header from "../Header/Header";
import Banner from "../imgs/BannerPrincipal2.svg";
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


class PageHome extends React.Component{
    render() {

        return (
          <div>
            <Header />
            <TesteImagem />
    
            <Teste1>
              <Botao onClick={this.props.changePage}>Personagens</Botao>
            </Teste1>
          </div>
        );
      }
}export default PageHome;