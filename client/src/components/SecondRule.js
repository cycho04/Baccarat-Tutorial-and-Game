import React from 'react';
import './styles/Rules.css';

const SecondRule = props => {
    return(
        <div className='hitchart-parent'>
            <p>1) CHECK THE PLAYER'S VALUE: If it's over 5, skip to step 3 without drawing a card.</p>  
            <p>Player has a value of 7(which is higher than 5), so go to Step 3</p>
            <div>
                <img src='./images/5C.jpg' alt='FIVE of clubs'/>
                <img src='./images/10H.jpg' alt='ten of hearts'/>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
                <img src='./images/9S.jpg' alt='nine of spades'/>
                <img src='./images/8D.jpg' alt='eight of diamonds'/>
            </div>

            <p>2) ALTERNATIVELY: If the value is 5 or below, we give one more card to the player's side and move onto step 4.</p>
            <p>Player initially has a value of 4, so it takes another card</p>
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
                    <button onClick={props.clickedStepThree} className='ui button'>Yes, Go to Step 3</button>
                    <button onClick={props.clickedStepFour} className='ui button'>No, Player draws, then Step 4</button>    
                </div> 
            </div>  
            <p>Two roads diverged...</p>
        </div>
        
    )
}

export default SecondRule;