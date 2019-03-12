import React from 'react';

//returns the ones digit if num1 + num2 is over 10
const baccaratCount = (num1, num2) => {
    const total = num1 + num2;
    if (total >= 10){
        return total - 10;
    }
    return total;//else
} 


const Cards = props => {
    return(
        <div>
            {/* testing out baccarat count.Works */}
            {baccaratCount(0, 9)}
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