import React from 'react';

const FirstRule = () => {
    return(
        <div>
            <div>
                Does either side EQUAL 8 or 9?
                <button  className='ui button'>Yes</button>
                <button  className='ui button'>No, Go to step 2</button>
            </div>
            <img src='./images/4C.jpg' alt='four of clubs'/>
            <img src='./images/4H.jpg' alt='four of hearts'/>
            <img src='./images/AC.jpg' alt='Ace of clubs'/>
            <img src='./images/JD.jpg' alt='jack of diamonds'/>
            <p>
                If the first two cards of either side equal to 8 or 9, we call this a Natural and the game is over. Whichever side holds the higher 
                value wins (or ties). If there is no "Natural", proceed to step 2
            </p>    
        </div>
        
    )
}

export default FirstRule;