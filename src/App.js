import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Banner from "./Components/imgs/BannerPrincipal2.svg";
import  Personagens  from "./Components/Pages/Personagens";
import PageHome from "./Components/Pages/PageHome"


class App extends React.Component {
  state = {
    page : false 
  }
  changePage = () =>{
    this.setState({page : true})
  }
  render() {
    const page = this.state.page ? <Personagens /> : <PageHome changePage={this.changePage} />;

    return (
      <div>
        {page}
      </div>
    );
  }
}

export default App;
