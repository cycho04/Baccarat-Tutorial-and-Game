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
                {props.banker.map((card) => {
                    console.log(card)
                    if(props.banker.length === 2){
                        return(
                            // ternary checks for new deck
                            <div>
                                <div className=''>{card ? card.value : 0}</div>
                                <img src={card ? card.src : ''} alt='gh'/>    
                            </div>
                        )    
                    }
                    else if (props.banker.length === 3){

                        return(
                            // ternary checks for new deck
                            <div>
                                <div className=''>{card ? card.value : 0}</div> 
                                <img src={card ? card.src : ''} alt='gh'/>       
                            </div>
                        )  
                    }
                    
                })}
                
                {props.player.map((card) => {
                    return(
                        <div className=''>{card ? card.value : 0}</div>    
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