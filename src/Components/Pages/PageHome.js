import React from "react";
import Header from "../Header/Header";
import { TesteImagem, Teste1, Botao } from "../styles/PageHomeStyles";

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