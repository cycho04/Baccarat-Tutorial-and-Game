import React from 'react';
import { Box, StyledCard, StyledCardWrapper, StyledPlaceHolder } from '../GameRules.style'


const HowToWin = () => {
    return(
        <>
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
        </>
    )
}

export default HowToWin;