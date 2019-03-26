import React from 'react';

import './styles/Cards.css'



const Cards = props => {


    const arrangeCards = () => {
        const bankerOrder = props.banker.slice();
        const playerOrder = props.player.slice();
        if (bankerOrder.length === 2 && playerOrder.length === 2){

        }
        else if(bankerOrder.length === 3){

        }
        else if(playerOrder.length === 3){

        }

        return(
            <div className='cards'>
                {props.banker.map((card, i) => {
                    if(props.banker.length === 2){
                        return(
                            // ternary checks for new deck
                            <img src={card ? card.src : ''} alt={i}/>    
                        )    
                    }
                    else if (props.banker.length === 3){
                        return(
                            <img src={card ? card.src : ''} alt={i}/>       
                        )  
                    }
                })}
                
                {props.player.map((card, i) => {
                    if(props.player.length === 2){
                        return(
                                <img src={card ? card.src : ''} alt={i}/>    
                        )    
                    }
                    else if (props.player.length === 3){
                        return(
                                <img src={card ? card.src : ''} alt={i}/>       
                        )  
                    }
                })}
            </div>
        )
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