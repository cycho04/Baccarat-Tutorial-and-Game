import React from 'react';


const Cards = props => {
    return(
        <div>
            <div>
                {props.banker.map((card) => {
                    if(props.banker.length === 2){
                        return(
                            // ternary checks for new deck
                            <span>{card ? card.value : 0}</span>    
                            
                        )    
                    }
                    else if (props.banker.length === 3){

                        return(
                            // ternary checks for new deck
                            <span>{card ? card.value : 0}</span>    
                        )  
                    }
                    
                })}
                - VS -
                {props.player.map((card) => {
                    return(
                        <span>{card ? card.value : 0}</span>    
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;