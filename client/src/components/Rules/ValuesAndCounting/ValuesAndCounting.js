import React from 'react';
import {Box, StyledCard, StyledCardWrapper, StyledPlaceHolder} from '../GameRules.style';


const ValuesAndCounting = () => {
    return(
        <>
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
        </>
    )
}

export default ValuesAndCounting;