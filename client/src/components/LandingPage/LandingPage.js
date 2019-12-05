import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  animation: 2s ${fadeInAnimation};
  background-image: url("https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const InnerBox = styled.div`
  background-image: radial-gradient(circle, #232526, #414345, #232526);
  padding: 1.5em;
  color: white;
  border-radius: 10px;
  width: 40%;
  box-shadow: 5px 10px 4px black;
  @media screen and (max-width: 600px){
    width: 75%;
  }
`;

const Text = styled.div`
  text-align: center;
  background: -webkit-linear-gradient(right, red, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledButton = styled.button`
  width: 48%;
  box-sizing: border-box;
  margin: 0.1rem !important;
  height: 100% !important;
`

const StyledButtonWrapper = styled.div`
  text-align: center;
`

const LandingPage = () => {
  return (
    <Wrapper>
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
  );
};

export default LandingPage;
