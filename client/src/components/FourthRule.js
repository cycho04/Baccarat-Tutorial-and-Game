import React from 'react';

const FourthRule = () => {
    return(
        <div>
            <p>
                The most detailed rule. So far, there's no naturals, and both player and banker side equal to 5 or less. since player is under 5 it hit a card. Now......
                The banker side will.......
                (0-2) Always hit if it equals 2 or below, regardless of the player's hit card.
                (3) will always hit a card, unless if the players hit card is an 8 (3-8 special)
                (4) will hit if the players hit card is 2-7. and stays on the rest.
                (5) will hit if the players hit card is 4-7 and stays on the rest.
                (6) will ONLY hit if the player's hit card is a 6 or 7
                (7) banker will never hit
                (8+) its a natural, we should've stopped at step 1. 
            </p>
        </div>
    )
}

export default FourthRule;