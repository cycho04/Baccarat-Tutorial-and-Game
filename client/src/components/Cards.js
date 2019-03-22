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
            <div>
                {props.banker.map((card) => {
                    if(props.banker.length === 2){
                        return(
                            // ternary checks for new deck
                            <span className='cards'>{card ? card.value : 0}</span>    
                            
                        )    
                    }
                    else if (props.banker.length === 3){

                        return(
                            // ternary checks for new deck
                            <span className='cards'>{card ? card.value : 0}</span>    
                        )  
                    }
                    
                })}
                - VS -
                {props.player.map((card) => {
                    return(
                        <span className='cards'>{card ? card.value : 0}</span>    
                    )
                })}
            </div>
        )
    }


    return(
        <div>
            {arrangeCards()}
        </div>
    )
}

export default Cards;