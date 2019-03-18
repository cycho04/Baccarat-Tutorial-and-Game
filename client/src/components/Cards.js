import React from 'react';


const Cards = props => {
    return(
        <div>
            <div>
                {props.banker.map((card) => {
                    return(
                        // ternary checks for new deck
                        <div>{card ? card.value : 0}</div>    
                    )
                })}
            </div>
            <div>
                {props.player.map((card) => {
                    return(
                        <div>{card ? card.value : 0}</div>    
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;