import React from "react";
import Header from "../Header/Header";
<<<<<<< HEAD
import { TesteImagem, Teste1, Botao } from "../styles/PageHomeStyles";
=======
import Banner from "../imgs/imgBannerHome.png";

const ImgBanner = styled.img `
  display: flex;
  justify-content: center;
  width: 30%;
`

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
  color: white;
  padding: 1rem 3rem;
  border: 2px  solid white;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;

  &:hover{
    color: white;
    background-color: #319956;
    border: 2px solid #319956;
  }
`;

const ImgDestaque = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`

>>>>>>> 4eeb170327c1499e974eba85c525a63925709d5d

class PageHome extends React.Component{
    render() {

        return (
          <div>
            <Header />

            <ImgDestaque>
              <ImgBanner src= {Banner}/>
            </ImgDestaque>
    
            <Teste1>
              <Botao onClick={this.props.changePage}>Personagens</Botao>
            </Teste1>
          </div>
        );
      }
}

export default PageHome;