import React from 'react';

import HitChart from './HitChart';
import './styles/Rules.css';

const Rules = () => {
    document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80")';
    document.body.style.backgroundRepeat='no-repeat';
    document.body.style.backgroundPosition='center';
    document.body.style.backgroundSize='cover';
    document.body.style.backgroundAttachment='fixed';
    return(
        <div className='ui container'>
            <h1>How to Play <i className='ui lightbulb outline icon'/></h1>
            <h4 className='ui horizontal divider header'>
                Intro
            </h4>
            <div className='ui piled segment'>
                <p>
                    Baccarat, also known as punto banco, is one of the oldest and most popular games in casinos all over the world. 
                    It is especially popular among high-rollers and Asian gamblers. In Macau, baccarat is extremely dominant. 
                    Although the game seems serious and elegant, it is really as simple as betting on the flip of a coin.
                </p>
                <h4 className='ui header'>
                    TL;DR simple as betting on a coin toss. 
                </h4>
            </div>

            <h4 className='ui horizontal divider header'>
                Basics
            </h4>
            <div className='ui piled segment'>
                <h4 className='ui header'>Let's start from the top.</h4>
                <p>
                    Baccarat is a card game that is dealt from a shoe that typically holds 8 standard decks(52 cards).
                    Before the hands are dealt, bets may be placed on the banker hand or on the player hand.   
                    After last calls, each side is dealt 2 cards each in alternating fashion like so: 
                </p>
                <div className='parent'>
                    <div className='rules-card'>
                        <img src='./images/4S.jpg' alt="Banker's 2nd card"/>
                        <div>4th</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/2C.jpg' alt="Banker's 1st card"/>
                        <div>2nd</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/3D.jpg' alt="Player's 2nd card"/>
                        <div>3rd</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/AH.jpg' alt="Player's 1st card"/>
                        <div>1st</div>
                    </div>    
                </div>
                
                
                
                
                

                <h4 className='ui header'>Values and Counting in Baccarat</h4>
                <p>
                    Tens and face cards are counted as zero, while all other cards are counted by the number of "pips" on the card face.
                    Only the last digit of the total is used, so all baccarat hands have values in the range 0 to 9 inclusive.
                </p>
                <p>
                    The value of a hand is determined by ADDING the values of its individual cards.    
                </p>
                <div className='parent'>
                    <div className='rules-card'>
                        <div>Value of 1</div>
                        <img src='./images/AS.jpg' alt="ace of spades"/>    
                    </div>
                    <div className='rules-card'>
                        <div>Value of 1</div>
                        <img src='./images/AS.jpg' alt="ace of spades"/>    
                    </div>
                </div>
                <div className='parent'>
                    <div className='rules-card'>
                        <div>Value of 7</div>
                        <img src='./images/7C.jpg' alt="seven of clubs"/>   
                    </div>
                    <div className='rules-card'>
                        <div>Value of 7</div>
                        <img src='./images/7C.jpg' alt="seven of clubs"/>   
                    </div>
                </div>
                <div className='parent'>
                    <div className='rules-card'>
                        <div>value of 0</div>
                        <img src='./images/JD.jpg' alt="jack of diamond"/>    
                    </div>
                    <div className='rules-card'>
                        <div>value of 0</div>
                        <img src='./images/JD.jpg' alt="jack of diamond"/>    
                    </div>
                </div>
                
                
                
                
                
                
                
                <h4 className='ui header'>How to win</h4>
                <p>   
                    The hand with the higher value wins; if the hands have the same value, the result is a tie.
                </p>
                <div className='parent'>
                    <div className='rules-card'>
                        <img src='./images/4S.jpg' alt="Banker's 2nd card"/>
                        <div>4</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/2C.jpg' alt="Banker's 1st card"/>
                        <div>2</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/3D.jpg' alt="Player's 2nd card"/>
                        <div>3</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/AH.jpg' alt="Player's 1st card"/>
                        <div>1</div>
                    </div>    
                </div>
                <div className='parent'>
                    <div className='rules-card'>
                        <img src='./images/4S.jpg' alt="Banker's 2nd card"/>
                        <div>4</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/2C.jpg' alt="Banker's 1st card"/>
                        <div>2</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/3D.jpg' alt="Player's 2nd card"/>
                        <div>3</div>
                    </div>
                    <div className='rules-card'>
                        <img src='./images/AH.jpg' alt="Player's 1st card"/>
                        <div>1</div>
                    </div>    
                </div>
                
            </div>
            
            <h4 className='ui horizontal divider header'>
                Step by step
            </h4>

            <HitChart />
        </div>
    );
};

export default Rules;