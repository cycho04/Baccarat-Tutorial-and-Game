import React from 'react';
import styled, {css} from 'styled-components';

import '../GameRules.css';

const Box = styled.div`
    padding-top: 1.0em;
    margin-bottom: 2.0em;
    border-radius: 25px;
    background-image: radial-gradient(circle, #D7DDE8, #FFFFFF);
`

const StyledCard = styled.img`
  width: 100%;
  border-radius: 10px;
`

const StyledCardWrapper = styled.div`
  width: 20%;
  display: inline-block;

  ${props => props.five && css`
    width: 15%;
  `}
`







const SecondRule = props => {
    return(
        <div className='hitchart-parent'>
            <p>1) CHECK THE PLAYER'S VALUE: If it's over 5, skip to step 3 without drawing a card.</p> 

            <Box>
                
                <StyledCardWrapper><StyledCard src='./images/5C.jpg' alt='FIVE of clubs'/></StyledCardWrapper>
                <StyledCardWrapper><StyledCard src='./images/10H.jpg' alt='ten of hearts'/></StyledCardWrapper>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
                <StyledCardWrapper><StyledCard src='./images/9S.jpg' alt='nine of spades'/></StyledCardWrapper>
                <StyledCardWrapper><StyledCard src='./images/8D.jpg' alt='eight of diamonds'/></StyledCardWrapper>
                
                <h3>Player has a value of 7(which is higher than 5), so go to Step 3</h3>
            </Box> 
            
            
            
            <p>2) ALTERNATIVELY: If the value is 5 or below, we give one more card to the player's side and move onto step 4.</p>
            
            <Box>
                
                <StyledCardWrapper five><StyledCard src='./images/7C.jpg' alt='seven of clubs'/></StyledCardWrapper>
                <StyledCardWrapper five><StyledCard src='./images/10H.jpg' alt='ten of hearts'/></StyledCardWrapper>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
                
                <StyledCardWrapper five><StyledCard src='./images/6S.jpg' alt='six of spades'/></StyledCardWrapper>
                <StyledCardWrapper five><StyledCard src='./images/8D.jpg' alt='eight of diamonds'/></StyledCardWrapper>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>+</h1>
                </div>
                <StyledCardWrapper five><StyledCard src='./images/10S.jpg' alt='ten of spades'/></StyledCardWrapper>
                <h3>Player initially has a value of 4, so it takes another card</h3>    
            </Box>
            
            

            <div className='hitchart-buttons'>
                <h3>Does the player's side equal 6 or higher?</h3>
                <div>
                    <button onClick={props.clickedStepThree} className='ui button'>Yes, Go to Step 3</button>
                    <button onClick={props.clickedStepFour} className='ui button'>No, Player draws, then Step 4</button>    
                </div> 
            </div>  
            <p>Two roads diverged...</p>
        </div>
        
    )
}

export default SecondRule;