import React from 'react';
import './styles/Rules.css';

const onYesClick = () => {
    alert('Game Over!');
}

const FirstRule = props => {
    return(
        <div className='hitchart-parent'>
            <p>
                If the first two cards of either side equal to 8 or 9, we call this a Natural and the game is over. Whichever side holds the higher 
                value wins (or ties).
            </p> 
            <p>Natural 8 Banker</p>
            <img src='./images/4C.jpg' alt='four of clubs'/>
            <img src='./images/4H.jpg' alt='four of hearts'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>VS</h1>
            </div>
            <img src='./images/AC.jpg' alt='Ace of clubs'/>
            <img src='./images/JD.jpg' alt='jack of diamonds'/>

            <p>Natural 9 Player</p>
            
            <img src='./images/2C.jpg' alt='two of clubs'/>
            <img src='./images/JS.jpg' alt='jack of spades'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>VS</h1>
            </div>
            <img src='./images/9C.jpg' alt='nine of clubs'/>
            <img src='./images/KH.jpg' alt='king of hearts'/>

            <p>Natural 8 tie</p>
            <img src='./images/4C.jpg' alt='four of clubs'/>
            <img src='./images/4H.jpg' alt='four of hearts'/>
            <div className='rules-card vertical-horizontal-parent placeholder'>
                <h1 className='vertical-horizontal-child'>VS</h1>
            </div>
            <img src='./images/AC.jpg' alt='Ace of clubs'/>
            <img src='./images/7D.jpg' alt='seven of diamonds'/>
             
            <p>Any of the above scenarios is considered Game Over.</p>
            <p>If there is no "Natural", proceed to step 2</p>
    

            <div className='hitchart-buttons'>
                <h3>Does either side EQUAL 8 or 9?</h3>
                <div>
                    <button onClick={onYesClick} className='ui button'>Yes</button>
                    <button onClick={props.clickedStepTwo} className='ui button'>No, Go to step 2</button>    
                </div>  
            </div>
        </div>
        
    )
}

export default FirstRule;