import React from 'react';

const ThirdRule = () => {
    return(
        <p>Since the player's side is over 5 and didn't receive an additional card, we check the banker side. If the banker side is over 5, we don't hit and the game is now over.
            If the banker side is under 5, we give the bankers side an additional card and the add up the value. the game is now over.
        </p>
    )
}

export default ThirdRule;