import React, { Component } from "react";
import styled from "styled-components";
import './App.css';

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

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
