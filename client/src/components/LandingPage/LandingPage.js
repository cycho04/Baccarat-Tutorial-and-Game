import React from "react";
import { Link } from "react-router-dom";
import cards from '../../images/cards.png';
import {GlobalStyle, Wrapper, StyledImg, InnerBox, Text, StyledButtonWrapper, StyledButton} from './LandingPage.style';


const LandingPage = () => {
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
              <StyledButton variant='contained'>Learn</StyledButton>
            </Link>
            <Link to="/game">
              <StyledButton variant='contained'>Play</StyledButton>
            </Link>
          </StyledButtonWrapper>
        </InnerBox>
      </Wrapper>
    </>
  )
};

export default LandingPage;
