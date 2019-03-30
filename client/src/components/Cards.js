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
                    <div className='single-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>
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
                    <div className='single-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>  
                    <img className='single-card' src={props.player[0].src} alt=''/>    
                    <img className='single-card' src={props.player[1].src} alt=''/>    
                </div>
            ) 
        }
        //just 2 cards each side
        else {
            return(
                <div className='cards'>
                    {props.banker.map((card, i) => {
                        return(
                            // ternary checks for new deck
                            <img className='single-card' src={card ? card.src : './images/Gray.jpg'} alt={i}/>    
                        )
                    })}
                    <div className='single-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>
                    {props.player.map((card, i) => {
                        return(
                            <img className={props.player.length === 3 ? 'single-card third' : 'single-card'} src={card ? card.src : './images/Gray.jpg'} alt={i}/>    
                        )       
                    })}
                </div>
            )    
        }
    }


    return(
        <div className='parent'>
            <h1>Banker/Player Wins!</h1>
            <h1>7/7</h1>
            {arrangeCards() }
        </div>
           
    )
}

export default Cards;