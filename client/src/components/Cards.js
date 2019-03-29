import React from 'react';

import './styles/Cards.css'



const Cards = props => {

    const arrangeCards = () => {
        //initializing. data hasn't been fetched yet.
        if(props.banker.length === 1){
            return(
                <div>Loading Data</div>
            )
        }
        //if both sides hit
        else if(props.banker.length === 3 && props.player.length === 3){
            return(
                <div className='cards parent'>
                    <img className='single-card third' src={props.banker[2].src} alt=''/> 
                    <img className='single-card' src={props.banker[0].src} alt=''/>     
                    <img className='single-card' src={props.banker[1].src} alt=''/>     
                    vs
                    <img className='single-card' src={props.player[0].src} alt=''/>    
                    <img className='single-card' src={props.player[1].src} alt=''/>  
                    <img className='single-card third' src={props.player[2].src} alt=''/>    
                </div>
            ) 
        }
        //only if banker hit
        else if(props.banker.length === 3){
            return(
                <div className='cards parent'>
                    <img className='single-card third' src={props.banker[2].src} alt=''/>
                    <img className='single-card' src={props.banker[0].src} alt=''/>     
                    <img className='single-card' src={props.banker[1].src} alt=''/>     
                    vs    
                    <img className='single-card' src={props.player[0].src} alt=''/>    
                    <img className='single-card' src={props.player[1].src} alt=''/>    
                </div>
            ) 
        }
        //just 2 cards each side
        else {
            return(
                <div className='cards parent'>
                    {props.banker.map((card, i) => {
                        return(
                            // ternary checks for new deck
                            <img className='single-card' src={card ? card.src : ''} alt={i}/>    
                        )
                    })}
                    vs
                    {props.player.map((card, i) => {
                        return(
                            <img className={props.player.length === 3 ? 'single-card third' : 'single-card'} src={card ? card.src : ''} alt={i}/>    
                        )       
                    })}
                </div>
            )    
        }
    }


    return(
        <div>
            <div className='ui segment'>
                {arrangeCards()}    
            </div>
            
        </div>
    )
}

export default Cards;