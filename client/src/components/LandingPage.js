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
`;

const InnerBox = styled.div`
  background-color: black;
  padding: 1.5em;
  color: white;
  border-radius: 25px;
  @media screen and (max-width: 600px){
    width: 50%;
  }
`;

const Text = styled.div`
  text-align: center;
`;

const LandingPage = () => {
  document.body.style.backgroundImage =
    'url("https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80")';
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundSize = "cover";
  return (
    <Wrapper>
      <InnerBox>
        <Text>
          <h1>EZ BACCARAT</h1>
        </Text>

        <Link to="/rules">
          <button className="huge ui button">Learn the Rules</button>
        </Link>
        <Link to="/game">
          <button className="huge ui button">Play the game</button>
        </Link>
      </InnerBox>
    </Wrapper>
  );
};

export default LandingPage;
