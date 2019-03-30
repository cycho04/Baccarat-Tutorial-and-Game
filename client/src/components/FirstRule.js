import React from 'react';
import './styles/Rules.css';

const FirstRule = () => {
    return(
        <div className='hitchart-parent'>
            <p>
                If the first two cards of either side equal to 8 or 9, we call this a Natural and the game is over. Whichever side holds the higher 
                value wins (or ties).
            </p> 
            <img src='./images/4C.jpg' alt='four of clubs'/>
            <img src='./images/4H.jpg' alt='four of hearts'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>VS</h1>
            </div>
            <img src='./images/AC.jpg' alt='Ace of clubs'/>
            <img src='./images/JD.jpg' alt='jack of diamonds'/>
             

            <p>If there is no "Natural", proceed to step 2</p>
            <div>
                <img src='./images/5D.jpg' alt='five of diamonds'/>
                <img src='./images/8H.jpg' alt='eight of hearts'/>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
                <img src='./images/AC.jpg' alt='Ace of clubs'/>
                <img src='./images/5D.jpg' alt='five of diamonds'/>
            </div>

            <div className='hitchart-buttons'>
                <h3>Does either side EQUAL 8 or 9?</h3>
                <div>
                    <button  className='ui button'>Yes</button>
                    <button  className='ui button'>No, Go to step 2</button>    
                </div>  
            </div>
        </div>
        
    )
}

export default FirstRule;