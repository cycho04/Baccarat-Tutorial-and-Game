import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import './styles/Cards.css';

const StyledCard = styled.img`
  width: 100%;
  border-radius: 10px;
`

const StyledCardWrapper = styled.div`
  width: 15%;
  display: inline-block;
`

const StyledPlaceHolder = styled.div`
  width: 10% !important;
`


const Cards = props => {

    const arrangeCards = () => {
        //initializing. data hasn't been fetched yet.
        if(props.state.banker.length === 1){
            return(
                <div>Loading Data</div>
            )
        }
        //if both sides hit
        else if(props.state.banker.length === 3 && props.state.player.length === 3){
            return(
                <div className='cards parent'>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.banker[2].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.banker[0].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.banker[1].src} alt=''/> </StyledCardWrapper>
                    
                    <StyledPlaceHolder className='single-card vertical-horizontal-parent'>
                        <h3 className='vertical-horizontal-child'>VS</h3>
                    </StyledPlaceHolder>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.player[0].src} alt=''/> </StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.player[1].src} alt=''/>  </StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.player[2].src} alt=''/></StyledCardWrapper>        
                </div>
            ) 
        }
        
        //only if banker hit
        else if(props.state.banker.length === 3){
            return(
                <div className='cards parent'>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.banker[2].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.banker[0].src} alt=''/></StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.banker[1].src} alt=''/> </StyledCardWrapper>
                         
                        
                    <StyledPlaceHolder className='single-card vertical-horizontal-parent'>
                        <h3 className='vertical-horizontal-child'>VS</h3>
                    </StyledPlaceHolder>  
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.player[0].src} alt=''/> </StyledCardWrapper>
                    <StyledCardWrapper><StyledCard className='single-card' src={props.state.player[1].src} alt=''/> </StyledCardWrapper>
                       
                </div>
            ) 
        }
        //just 2 cards each side
        else {
            return(
                <div className='cards'>
                    {props.state.banker.map((card, i) => {
                        return(
                            // ternary checks for new deck
                            <StyledCardWrapper><StyledCard className='single-card' src={card ? card.src : './images/AD.jpg'} alt={i}/></StyledCardWrapper>    
                        )
                    })}
                    <StyledPlaceHolder className='single-card vertical-horizontal-parent'>
                        <h3 className='vertical-horizontal-child'>VS</h3>
                    </StyledPlaceHolder>
                    {props.state.player.map((card, i) => {
                        return(
                            <StyledCardWrapper><StyledCard className={props.state.player.length === 3 ? 'single-card' : 'single-card'} src={card ? card.src : './images/Gray.jpg'} alt={i}/></StyledCardWrapper>  
                        )       
                    })}
                </div>
            )    
        }
    }


    return(
        <div className='parent'>
            {arrangeCards() }
        </div>
           
    )
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Cards);