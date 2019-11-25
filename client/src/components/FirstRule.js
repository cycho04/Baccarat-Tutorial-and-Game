import React from 'react';
import './styles/Rules.css';
import styled from 'styled-components';


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
`

const StyledPlaceHolder = styled.div`
  width: 10% !important;
`
const StyledText = styled.div`
    width: 10%;
`

const onYesClick = () => {
    alert('Game Over!');
}

const FirstRule = props => {
    return(
        <>
            <StyledText>
                If the first two cards of either side equal to 8 or 9, we call this a Natural and the game is over. Whichever side holds the higher 
                value wins (or ties).
            </StyledText> 
            <Box>  
                <StyledCardWrapper>
                    <StyledCard src='./images/4C.jpg' alt='four of clubs'/>
                </StyledCardWrapper>
                <StyledCardWrapper>
                    <StyledCard src='./images/4H.jpg' alt='four of hearts'/>
                </StyledCardWrapper>
                
                <StyledPlaceHolder className='rules-card'/>
                <StyledCardWrapper>
                   <StyledCard src='./images/AC.jpg' alt='Ace of clubs'/> 
                </StyledCardWrapper>
                
                <StyledCardWrapper>
                  <StyledCard src='./images/JD.jpg' alt='jack of diamonds'/>     
                </StyledCardWrapper>
                
                <h3>Natural 8 Banker</h3> 
            </Box>
            
            <Box>       
                <StyledCardWrapper><StyledCard src='./images/2C.jpg' alt='two of clubs'/></StyledCardWrapper>
                <StyledCardWrapper><StyledCard src='./images/JS.jpg' alt='jack of spades'/></StyledCardWrapper>
                <StyledPlaceHolder className='rules-card'/>
                <StyledCardWrapper><StyledCard src='./images/9C.jpg' alt='nine of clubs'/></StyledCardWrapper>
                <StyledCardWrapper><StyledCard src='./images/KH.jpg' alt='king of hearts'/></StyledCardWrapper>
                <h3>Natural 9 Player</h3>    
            </Box>
            
            <Box>
                <StyledCardWrapper><StyledCard src='./images/4C.jpg' alt='four of clubs'/></StyledCardWrapper>
                <StyledCardWrapper><StyledCard src='./images/4H.jpg' alt='four of hearts'/></StyledCardWrapper>          
                <StyledPlaceHolder className='rules-card'/>
                <StyledCardWrapper><StyledCard src='./images/AC.jpg' alt='Ace of clubs'/></StyledCardWrapper>
                <StyledCardWrapper><StyledCard src='./images/7D.jpg' alt='seven of diamonds'/></StyledCardWrapper>
                <h3>Natural 8 tie</h3>
            </Box>
            
            <p>Any of the above scenarios is considered Game Over.</p>
            <p>If there is no "Natural", proceed to step 2</p>
    
            <div className='hitchart-buttons'>
                <h3>Does either side EQUAL 8 or 9?</h3>
                <div>
                    <button onClick={onYesClick} className='ui button'>Yes</button>
                    <button onClick={props.clickedStepTwo} className='ui button'>No, Go to step 2</button>    
                </div>  
            </div>
        </>
        
    )
}

export default FirstRule;