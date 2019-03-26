import React from 'react';

const ThirdRule = () => {
    return(
        <div>
            <div>
                Does the banker's side equal 6 or higher?
                <button  className='ui button'>Yes</button>
                <button  className='ui button'>No</button>
            </div>
            <img src='./images/3S.jpg' alt='three of spades'/>
            <img src='./images/KD.jpg' alt='king of diamonds'/>
            <img src='./images/5S.jpg' alt='five of spades'/>
            <img src='./images/7H.jpg' alt='seven of hearts'/>
            <img src='./images/QD.jpg' alt='queen of diamonds'/>
            <p>
                Since the player's side is over 5 and didn't receive an additional card, we check the banker side. If the banker side is over 5, we don't hit and the game is now over.
                If the banker side is under 5, we give the bankers side an additional card and the add up the value. the game is now over.
            </p>    
        </div>
        
    )
}

export default ThirdRule;