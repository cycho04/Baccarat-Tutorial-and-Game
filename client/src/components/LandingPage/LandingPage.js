import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes,createGlobalStyle } from "styled-components";
import { fadeIn, fadeOut } from "react-animations";
import cards from '../../images/cards.png';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(#53a318, #348700);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    animation: 1s ${fadeOutAnimation};
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  animation: 1s ${fadeInAnimation};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const InnerBox = styled.div`
  background: transparent;
  padding: 1.5em;
  color: white;
  border-radius: 10px;
  width: 40%;
  @media screen and (max-width: 600px){
    width: 75%;
  }
`;

const Text = styled.div`
  text-align: center;
  color: white;
  padding-bottom: 3rem;
`;

const StyledButton = styled.button`
  width: 20%;
  box-sizing: border-box;
  margin: 0.1rem !important;
  height: 100% !important;
`

const StyledButtonWrapper = styled.div`
  text-align: center;
`

const StyledImg = styled.img`
  width: auto !important;
`

class LandingPage extends React.Component {
 
  render(){
    return(
      <>
        <GlobalStyle />
        <Wrapper>
          <StyledImg src={cards}/>
          <InnerBox>
            <Text>
              <h1>EZ BACCARAT</h1>
            </Text>
            <StyledButtonWrapper>
              <Link to="/rules">
                <StyledButton className="huge ui button">Learn</StyledButton>
              </Link>
              <Link to="/game">
                <StyledButton className="huge ui button">Play</StyledButton>
              </Link>
            </StyledButtonWrapper>
          </InnerBox>
        </Wrapper>
      </>
    )
  }
};

export default LandingPage;
