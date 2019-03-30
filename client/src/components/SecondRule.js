import React from 'react';
import './styles/Rules.css';

const SecondRule = () => {
    return(
        <div className='hitchart-parent'>

            <p>If the value is over 5, we don't give a card to the player side and move onto to step 3.</p>  
            <div>
                <img src='./images/7C.jpg' alt='seven of clubs'/>
                <img src='./images/10H.jpg' alt='ten of hearts'/>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
                <img src='./images/9S.jpg' alt='nine of spades'/>
                <img src='./images/8D.jpg' alt='eight of diamonds'/>
            </div>

            <p>Since neither side equals an 8 or 9... We check the value of the player side. If the value is under 5, we give one more card to the player's side and move onto step 4.</p>
            <img src='./images/7C.jpg' alt='seven of clubs'/>
            <img src='./images/10H.jpg' alt='ten of hearts'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>VS</h1>
            </div>
            <img src='./images/6S.jpg' alt='six of spades'/>
            <img src='./images/8D.jpg' alt='eight of diamonds'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img src='./images/10S.jpg' alt='ten of spades'/>

            <div className='hitchart-buttons'>
                <h3>Does the player's side equal 6 or higher?</h3>
                <div>
                    <button  className='ui button'>Yes, Go to Step 3</button>
                    <button  className='ui button'>No, Go to Step 4</button>    
                </div> 
            </div>  
        </div>
        
    )
}

export default SecondRule;