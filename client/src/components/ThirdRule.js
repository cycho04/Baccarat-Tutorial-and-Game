import React from 'react';
import './styles/Rules.css';

const ThirdRule = () => {
    return(
        <div className='hitchart-parent'>
            <p>
                Since the player's side is over 5 and didn't receive an additional card, we check the banker side. If the banker side is over 5, we don't hit and the game is now over.
            </p>   
            <img src='./images/6S.jpg' alt='six of spades'/>
            <img src='./images/KD.jpg' alt='king of diamonds'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img src='./images/7H.jpg' alt='seven of hearts'/>
            <img src='./images/QD.jpg' alt='queen of diamonds'/>

            <p> If the banker side is under 5, we give the bankers side an additional card and the add up the value. the game is now over.</p>
            <img src='./images/3S.jpg' alt='three of spades'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img src='./images/KD.jpg' alt='king of diamonds'/>
            <img src='./images/5S.jpg' alt='five of spades'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img src='./images/7H.jpg' alt='seven of hearts'/>
            <img src='./images/QD.jpg' alt='queen of diamonds'/>
             

            <div className='hitchart-buttons'>
                <h3>Does the banker's side equal 6 or higher?</h3>
                <div>
                    <button  className='ui button'>Yes</button>
                    <button  className='ui button'>No</button>   
                </div>
                
            </div>
        </div>
        
    )
}

export default ThirdRule;