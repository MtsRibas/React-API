import React from "react";

import Personagens from "./Components/Pages/Personagens";
import PageHome from "./Components/Pages/PageHome";
import styled from "styled-components";

const Main = styled.div`
  padding: 5px 120px;
`

class App extends React.Component {
  state = {
    page: false,
  };
  changePage = () => {
    this.setState({ page: true });
  };
  render() {
    const page = this.state.page ? (
      <Personagens />
    ) : (
      <PageHome changePage={this.changePage} />
    );

    return <Main>{page}</Main>;
  }
}

export default App;
