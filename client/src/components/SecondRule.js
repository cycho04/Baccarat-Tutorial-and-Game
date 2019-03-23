import React from 'react';

const SecondRule = () => {
    return(
        <p>Since neither side equals an 8 or 9... We check the value of the player side. If the value is over 5, we don't give a card to the player side and move onto to step 3.
            If the value is under 5, we give one more card to the player's side and move onto step 4.
        </p>
    )
}

export default SecondRule;