import React from 'react';


const Cards = props => {
    return(
        <div>
            <div>
                {/* testing out redux store. properly display the card values */}
                {props.currentHand.map((card) => {
                    return(
                        <div>{card.value}</div>    
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;