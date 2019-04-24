import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Wrapper = styled.div`
  font-family: "Exo 2", sans-serif !important;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
