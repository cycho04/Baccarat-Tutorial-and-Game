import React from 'react';

const SecondRule = () => {
    return(
        <div>
            <div>
                Does the player's side equal 6 or higher?
                <button  className='ui button'>Yes, Go to Step 3</button>
                <button  className='ui button'>No, Go to Step 4</button>
            </div>
            <img src='./images/2C.jpg' alt='two of clubs'/>
            <img src='./images/10H.jpg' alt='ten of hearts'/>
            <img src='./images/6S.jpg' alt='six of spades'/>
            <img src='./images/8D.jpg' alt='eight of diamonds'/>
            <img src='./images/10S.jpg' alt='ten of spades'/>
            <p>Since neither side equals an 8 or 9... We check the value of the player side. If the value is over 5, we don't give a card to the player side and move onto to step 3.
                If the value is under 5, we give one more card to the player's side and move onto step 4.
            </p>    
        </div>
        
    )
}

export default SecondRule;