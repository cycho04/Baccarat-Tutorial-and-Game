import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    StyledCard, 
    StyledCardWrapper, 
    StyledPlaceHolder, 
    StyledWrapper, 
    StyledText
} from './Cards.style';


const Cards = props => {
    const {bankerLength, playerLength, banker, player} = props;

    const arrangeCards = () => {
        //initializing. data hasn't been fetched yet.
        if(bankerLength === 1){
            return(
                <div>Loading Data</div>
            )
        }
        //if both sides hit
        else if(bankerLength === 3 && playerLength === 3){
            return(
                <StyledWrapper>
                    <StyledCardWrapper><StyledCard src={banker[2].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={banker[0].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={banker[1].src} alt=''/> </StyledCardWrapper>
                    
                    <StyledPlaceHolder>
                        <StyledText>VS</StyledText>
                    </StyledPlaceHolder>

                    <StyledCardWrapper><StyledCard src={player[0].src} alt=''/> </StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={player[1].src} alt=''/>  </StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={player[2].src} alt=''/></StyledCardWrapper>        
                </StyledWrapper>
            ) 
        }
        
        //only if banker hit
        else if(banker.length === 3){
            return(
                <StyledWrapper>
                    <StyledCardWrapper><StyledCard src={banker[2].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={banker[0].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={banker[1].src} alt=''/> </StyledCardWrapper>
                                 
                    <StyledPlaceHolder>
                        <StyledText>VS</StyledText>
                    </StyledPlaceHolder>

                    <StyledCardWrapper><StyledCard src={player[0].src} alt=''/> </StyledCardWrapper>
                    <StyledCardWrapper><StyledCard src={player[1].src} alt=''/> </StyledCardWrapper>
                       
                </StyledWrapper>
            ) 
        }

        //just 2 cards each side
        else {
            return(
                <StyledWrapper>
                    {banker.map((card, i) => {
                        return(
                            // ternary checks for new deck
                            <StyledCardWrapper><StyledCard src={card ? card.src : './images/AD.jpg'} alt={i}/></StyledCardWrapper>    
                        )
                    })}
                    <StyledPlaceHolder>
                        <StyledText>VS</StyledText>
                    </StyledPlaceHolder>
                    {player.map((card, i) => {
                        return(
                            <StyledCardWrapper><StyledCard src={card ? card.src : './images/Gray.jpg'} alt={i}/></StyledCardWrapper>  
                        )       
                    })}
                </StyledWrapper>
            )    
        }
    }

    return(
        <>
            {arrangeCards()}
        </>
           
    )
}

const mapStateToProps = state => {
    return{
        bankerLength: state.banker.length,
        playerLength: state.player.length,
        banker: state.banker,
        player: state.player,

    }
}

Cards.propTypes = {
    bankerLength: PropTypes.number,
    playerLength: PropTypes.number,
    banker: PropTypes.array,
    player: PropTypes.array,

}

export default connect(mapStateToProps)(Cards);