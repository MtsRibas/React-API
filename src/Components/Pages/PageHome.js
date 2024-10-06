import React from "react";
import Header from "../Header/Header";
import Banner from "../imgs/imgBannerHome.png";
import {
  ImgDestaque,
  ImgBanner,
  DivBotao,
  Botao,
} from "../styles/PageHomeStyles";

class PageHome extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <ImgDestaque>
          <ImgBanner src={Banner} />
        </ImgDestaque>

        <DivBotao>
          <Botao onClick={this.props.changePage}>Personagens</Botao>
        </DivBotao>
      </div>
    );
  }
}

export default PageHome;
