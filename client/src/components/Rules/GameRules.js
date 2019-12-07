import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { fadeIn } from "react-animations";

import HitChart from "../HitChart/HitChart";
import "./GameRules.css";

const fadeInAnimation = keyframes`${fadeIn}`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`

const Box = styled.div`
  padding-top: 1em;
  margin-bottom: 2em;
  border-radius: 25px;
  background-image: radial-gradient(circle, #d7dde8, #ffffff);
`;

const RulesWrapper = styled.div`
  animation: 1s ${fadeInAnimation};
  position: relative;
  padding-top: 15vh;
`;

const StyledCard = styled.img`
  width: 100%;
  border-radius: 10px;
`

const StyledCardWrapper = styled.div`
  width: 20%;
`

const StyledPlaceHolder = styled.div`
  width: 10% !important;
`

class GameRules extends React.Component {
  state = { first: false, second: false, third: false, fourth: false };

  renderCard = () => {
    setTimeout(() => {
      this.setState({ first: true });
    }, 500);
    setTimeout(() => {
      this.setState({ second: true });
    }, 1500);
    setTimeout(() => {
      this.setState({ third: true });
    }, 2500);
    setTimeout(() => {
      this.setState({ fourth: true });
    }, 3500);
    setTimeout(() => {
      this.setState({
        first: false,
        second: false,
        third: false,
        fourth: false
      });
    }, 5000);
  };

  render() {
    return (
      <>
        <GlobalStyle />
      <RulesWrapper className="ui container">
        <h1>
          How to Play <i className="ui lightbulb outline icon" />
        </h1>
        <h4 className="ui horizontal divider header">Intro</h4>
        <div className="ui piled segment">
          <p>
            Baccarat, also known as punto banco, is one of the oldest and most
            popular games in casinos all over the world. It is especially
            popular among high-rollers and Asian gamblers. In Macau, baccarat is
            extremely dominant. Although the game seems serious and elegant, it
            is really as simple as betting on the flip of a coin.
          </p>
          <h4 className="ui header">
            TL;DR simple as betting on a coin toss. (Almost 50/50 chance of
            winning)
          </h4>
        </div>

        <h4 className="ui horizontal divider header">Basics</h4>
        <div className="ui piled segment">
          <h2 className="ui header">Let's start from the top.</h2>
          <p>
            Baccarat is a card game that is dealt from a shoe that typically
            holds 8 standard 52-card decks(416 cards total). Before the hands
            are dealt, bets may be placed on the banker hand or on the player
            hand. After last calls, each side is dealt 2 cards each in
            alternating fashion like so:
          </p>
          <div className="parent">
            <StyledCardWrapper className="rules-card">
              <StyledCard
                src={this.state.fourth ? "./images/4S.jpg" : "./images/Red.jpg"}
                alt="Banker's 2nd card"
              />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard
                src={this.state.second ? "./images/2C.jpg" : "./images/Red.jpg"}
                alt="Banker's 1st card"
              />
            </StyledCardWrapper>
            
            <StyledPlaceHolder className="rules-card" />
            
            <StyledCardWrapper className="rules-card">
              <StyledCard
                src={this.state.third ? "./images/3D.jpg" : "./images/Blue.jpg"}
                alt="Player's 2nd card"
              />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard
                src={this.state.first ? "./images/AH.jpg" : "./images/Blue.jpg"}
                alt="Player's 1st card"
              />
            </StyledCardWrapper>
            <div>
              <button className="ui green button" onClick={this.renderCard}>
                Deal Cards
              </button>
            </div>
          </div>

          <p>
            Now after the initial deal, each side can receive a third card.
            We'll go over this step-by-step very soon. For now let's
            practice finding the values
          </p>
           
          <h2 className="ui header">Values and Counting in Baccarat</h2>
          <p>
            Tens and face cards are counted as zero, while all other cards are
            counted by the number of "pips" on the card face. Only the last
            digit of the total is used, so all baccarat hands have values in the
            range 0 to 9 inclusive.
          </p>
          <p>
            The value of a hand is determined by ADDING the values of its
            individual cards.
          </p>

          <Box className="parent">
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/AS.jpg" alt="ace of spades" />
              <div>One</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>+</h3>
            </StyledPlaceHolder>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/6D.jpg" alt="six of diamonds" />
              <div>Six</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>= 7</h3>
            </StyledPlaceHolder>
          </Box>

          <Box className="parent">
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/7C.jpg" alt="seven of clubs" />
              <div>Seven</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>+</h3>
            </StyledPlaceHolder>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/7C.jpg" alt="seven of clubs" />
              <div>Seven</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>= 4</h3>
            </StyledPlaceHolder>
          </Box>

          <Box className="parent">
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/3H.jpg" alt="three of hearts" />
              <div>Three</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>+</h3>
            </StyledPlaceHolder>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/9C.jpg" alt="nine of clubs" />
              <div>Nine</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>+</h3>
            </StyledPlaceHolder>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/6C.jpg" alt="six of clubs" />
              <div>Six</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>= 8</h3>
            </StyledPlaceHolder>
          </Box>

          <Box className="parent">
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/KS.jpg" alt="king of spades" />
              <div>Zero</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>+</h3>
            </StyledPlaceHolder>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/3C.jpg" alt="three of clubs" />
              <div>Three</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>+</h3>
            </StyledPlaceHolder>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/3C.jpg" alt="three of clubs" />
              <div>Three</div>
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card">
              <h3>= 6</h3>
            </StyledPlaceHolder>
          </Box>

          <h2 className="ui header">How to win</h2>
          <p>
            The hand with the higher value wins; if the hands have the same
            value, the result is a tie.
          </p>

          <Box className="parent">
            <h3> Banker equal 6, Player equals 4.</h3>

            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/4S.jpg" alt="Banker's 2nd card" />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/2C.jpg" alt="Banker's 1st card" />
            </StyledCardWrapper>
            <StyledPlaceHolder className="rules-card" />
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/3D.jpg" alt="Player's 2nd card" />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/AH.jpg" alt="Player's 1st card" />
            </StyledCardWrapper>
            <h3>Banker Wins!</h3>
          </Box>

          <Box className="parent">
            <h3> Banker equals 7, Player equals 9. </h3>

            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/5D.jpg" alt="five of diamonds" />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/2D.jpg" alt="two of diamonds" />
            </StyledCardWrapper>

            <StyledPlaceHolder className="rules-card" />

            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/9C.jpg" alt="nine of clubs" />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/10S.jpg" alt="ten of spades" />
            </StyledCardWrapper>
            <h3>Player Wins!</h3>
          </Box>

          <Box className="parent">
            <h3> Banker equals 0, Player equals 0.</h3>

            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/9H.jpg" alt="nine of hearts" />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/AH.jpg" alt="Ace of hearts" />
            </StyledCardWrapper>

            <StyledPlaceHolder className="rules-card" />
            
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/JS.jpg" alt="jack of spades" />
            </StyledCardWrapper>
            <StyledCardWrapper className="rules-card">
              <StyledCard src="./images/QD.jpg" alt="queen of diamonds" />
            </StyledCardWrapper>
            <h3>Its a TIE!</h3>
          </Box>

          <div>
            <h3>
              Now that we've covered the basics, let's talk about when we deal
              each side an extra card...
            </h3>
          </div>
        </div>
        <h3 className="ui horizontal divider header">Step by step</h3>

        <HitChart />
      </RulesWrapper>

      </>
    );
  }
}

export default GameRules;
