import React from 'react';
import { Link } from 'react-router-dom';

import './styles/FourthRule.css';

const FourthRule = () => {
    return(
        <div>
            <p>Check Banker Value AND the 3rd player card(The one we drew in Step 2)</p>
            <p>If the Banker value is...</p>


            <p>0, 1, or 2, banker always draws one card. Game Over.</p>
            <p>3 vs 4. Player Wins</p>
            <img className='smallerPic' src='./images/3S.jpg' alt='three of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/KD.jpg' alt='king of diamonds'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>


            <p>3, banker draws a card, except when the player's 3rd card is an 8, in which case, no draw. </p>
            <img className='smallerPic' src='./images/QS.jpg' alt='queen of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/8H.jpg' alt='eight of hearts'/>
            <img className='smallerPic' src='./images/5D.jpg' alt='five of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>

            <p>Banker doesn't draw because its value is 3 and the player draw card is 8</p>
            <img className='smallerPic' src='./images/8H.jpg' alt='eight of hearts'/>
            <img className='smallerPic' src='./images/5D.jpg' alt='five of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/8S.jpg' alt='eight of spades'/>


            <p>4, banker draws a card if the player's 3rd card is 2 through 7, inclusively</p>
            <img className='smallerPic' src='./images/3S.jpg' alt='three of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/KD.jpg' alt='king of diamonds'/>
            <img className='smallerPic' src='./images/4S.jpg' alt='five of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/6D.jpg' alt='six of diamonds'/>


            <p>5, banker draws a card if the player's 3rd card is 4 through 7, inclusively</p>
            <img className='smallerPic' src='./images/3S.jpg' alt='three of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/KD.jpg' alt='king of diamonds'/>
            <img className='smallerPic' src='./images/5S.jpg' alt='five of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/4D.jpg' alt='four of diamonds'/>


            <p>6, banker draws a card if the player's 3rd card is 6 or 7.</p>
            <img className='smallerPic' src='./images/3S.jpg' alt='three of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/KD.jpg' alt='king of diamonds'/>
            <img className='smallerPic' src='./images/6S.jpg' alt='six of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/7D.jpg' alt='seven of diamonds'/>


            <p>7 or higher, no draw</p>
            <img className='smallerPic' src='./images/KD.jpg' alt='king of diamonds'/>
            <img className='smallerPic' src='./images/5S.jpg' alt='five of spades'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                    <h1 className='vertical-horizontal-child'>VS</h1>
                </div>
            <img className='smallerPic' src='./images/4H.jpg' alt='four of hearts'/>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>
            <div className='rules-card vertical-horizontal-parent shorterplaceholder'>
                <h1 className='vertical-horizontal-child'>+</h1>
            </div>
            <img className='smallerPic' src='./images/QD.jpg' alt='queen of diamonds'/>

            <p>Game Over!!</p>
            
            <a className='item'>
                <Link to='/game'><i className='huge black gamepad icon'/></Link>
            </a>
            <p>Play Now</p>
        </div>
    )
}

export default FourthRule;