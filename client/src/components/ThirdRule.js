import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import './styles/Rules.css';


const Box = styled.div`
    padding-top: 1.0em;
    margin-bottom: 2.0em;
    border-radius: 25px;
    background-image: radial-gradient(circle, #D7DDE8, #FFFFFF);
`

const onYesClick = () => {
    alert('no Draw! Game Over!')
}
const onNoClick = () => {
    alert('Banker Draws 1. Game Over!')
}

const ThirdRule = () => {
    return(
        <div className='hitchart-parent'>
            <p>
                1) CHECK BANKER VALUE. If the banker side is 6 or higher, no more draw and the game is now over.
            </p>   

            <Box>
                <img src='./images/6S.jpg' alt='six of spades'/>
                <img src='./images/KD.jpg' alt='king of diamonds'/>
                <div className='rules-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>
                <img src='./images/7H.jpg' alt='seven of hearts'/>
                <img src='./images/QD.jpg' alt='queen of diamonds'/>
                <h3>6 vs 7. Player Wins</h3>
            </Box>
            
            

            <p>2) Alternative: If the banker side is 5 or under, Banker draws a card and add up the value. Game Over</p>

            <Box>
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
                <h3>Banker has 5, so it draws. It is now 8 vs 7. Banker wins.</h3>
            </Box>
            
            


            <p>Game Over!!</p>
             

            <div className='hitchart-buttons'>
                <h3>Does the banker's side equal 6 or higher?</h3>
                <div>
                    <button onClick={onYesClick} className='ui button'>Yes</button>
                    <button onClick={onNoClick} className='ui button'>No</button>   
                </div>
                
                <a className='item'>
                    <Link to='/game'><i className='huge black gamepad icon'/></Link>
                </a>
                <p>Play Now</p>
            </div>
        </div>
        
    )
}

export default ThirdRule;