import React from 'react';

import HitChart from './HitChart';
import './styles/Rules.css';

class Rules extends React.Component {

    state = { first: false, second: false, third: false, fourth: false }

    componentDidMount(){
        document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80")';
        document.body.style.backgroundRepeat='no-repeat';
        document.body.style.backgroundPosition='center';
        document.body.style.backgroundSize='cover';
        document.body.style.backgroundAttachment='fixed';  
    }

    renderCard = () => {
            setTimeout(() => {
                this.setState({ first: true })
            }, 500)
            setTimeout(() => {
                this.setState({ second: true })
            }, 1500)
            setTimeout(() => {
                this.setState({ third: true })
            }, 2500)
            setTimeout(() => {
                this.setState({ fourth: true })
            }, 3500)
            setTimeout(() => {
                this.setState({ first: false, second: false, third: false, fourth: false })
            }, 5000)
    }
    

    render(){
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
                        TL;DR simple as betting on a coin toss. (Almost 50/50 chance of winning)
                    </h4>
                </div>

                <h4 className='ui horizontal divider header'>
                    Basics
                </h4>
                <div className='ui piled segment'>
                    <h2 className='ui header'>Let's start from the top.</h2>
                    <p>
                        Baccarat is a card game that is dealt from a shoe that typically holds 8 standard 52-card decks(416 cards total).
                        Before the hands are dealt, bets may be placed on the banker hand or on the player hand.   
                        After last calls, each side is dealt 2 cards each in alternating fashion like so: 
                    </p>
                    <div className='parent'>
                        <div className='rules-card'>
                            {this.state.fourth ? 
                                
                                <div>
                                    <img src='./images/4S.jpg' alt="Banker's 2nd card"/>
                                    <div>4th</div> 
                                </div>:
                                <div>Loader</div>
                                
                            }
                        </div>
                        <div className='rules-card'>
                            {this.state.second ?  
                                <div> 
                                    <img src='./images/2C.jpg' alt="Banker's 1st card"/>
                                    <div>2nd</div>
                                </div>:
                                <div>Loader</div>
                            } 
                        </div>
                        <div className='rules-card'>
                            {this.state.third ? 
                                
                                <div>
                                    <img src='./images/3D.jpg' alt="Player's 2nd card"/>
                                    <div>3rd</div> 
                                </div>:
                                <div>Loader</div>
                            }
                        </div>
                        <div className='rules-card'>
                            {this.state.first ? 
                                
                                <div>
                                    <img src='./images/AH.jpg' alt="Player's 1st card"/>
                                    <div>1st</div>
                                </div>:
                                <div>Loader</div>
                            }
                        </div>  
                        <button onClick={this.renderCard}>Deal Cards</button>  
                        <p>Now after the initial deal, each side can receive a third card (We'll go over this step-by-step very soon). For now let's practice finding the values</p>
                    </div>
                    
                    
                    
                    
                    

                    <h2 className='ui header'>Values and Counting in Baccarat</h2>
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
                        <div className='rules-card'>+</div>
                        <div className='rules-card'>
                            <div>Value of 6</div>
                            <img src='./images/6D.jpg' alt="six of diamonds"/>    
                        </div>
                        <div className='rules-card'> = 7</div>
                    </div>
                    <div className='parent'>
                        <div className='rules-card'>
                            <div>Value of 7</div>
                            <img src='./images/7C.jpg' alt="seven of clubs"/>   
                        </div>
                        <div className='rules-card'>+</div>
                        <div className='rules-card'>
                            <div>Value of 7</div>
                            <img src='./images/7C.jpg' alt="seven of clubs"/>   
                        </div>
                        <div className='rules-card'>= 14, so just 4</div>
                    </div>
                    <div className='parent'>
                        <div className='rules-card'>
                            <div>value of 3</div>
                            <img src='./images/3H.jpg' alt="three of hearts"/>    
                        </div>
                        <div className='rules-card'>+</div>
                        <div className='rules-card'>
                            <div>value of 9</div>
                            <img src='./images/9C.jpg' alt="nine of clubs"/>    
                        </div>
                        <div className='rules-card'>+</div>
                        <div className='rules-card'>
                            <div>value of 6</div>
                            <img src='./images/6C.jpg' alt="six of clubs"/>    
                        </div>
                        <div className='rules-card'> = 18, so just 8</div>
                    </div>
                    <div className='parent'>
                        <div className='rules-card'>
                            <div>value of 0</div>
                            <img src='./images/KS.jpg' alt="king of spades"/>    
                        </div>
                        <div className='rules-card'>+</div>
                        <div className='rules-card'>
                            <div>value of 3</div>
                            <img src='./images/3C.jpg' alt="three of clubs"/>    
                        </div>
                        <div className='rules-card'> = 3</div>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    <h2 className='ui header'>How to win</h2>
                    <p>   
                        The hand with the higher value wins; if the hands have the same value, the result is a tie.
                    </p>
                    
                    <h3> player equal 4, banker equals 6. Banker Wins!</h3>
                    <div className='parent'>
                        <div className='rules-card'>
                            <img src='./images/4S.jpg' alt="Banker's 2nd card"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/2C.jpg' alt="Banker's 1st card"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/3D.jpg' alt="Player's 2nd card"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/AH.jpg' alt="Player's 1st card"/>
                        </div>                 
                    </div>

                    <h3> player equal 7, banker equals 9. Player Wins!</h3>
                    <div className='parent'>
                        <div className='rules-card'>
                            <img src='./images/5D.jpg' alt="five of diamonds"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/2D.jpg' alt="two of diamonds"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/9C.jpg' alt="nine of clubs"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/10S.jpg' alt="ten of spades"/>
                        </div>    
                    </div>

                    <h3> player equal 0, banker equals 0. Its a TIE!</h3>
                    <div className='parent'>
                        <div className='rules-card'>
                            <img src='./images/9H.jpg' alt="nine of hearts"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/AH.jpg' alt="Ace of hearts"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/JS.jpg' alt="jack of spades"/>
                        </div>
                        <div className='rules-card'>
                            <img src='./images/QD.jpg' alt="queen of diamonds"/>
                        </div>    
                    </div>
                    
                </div>
                <h3 className='ui horizontal divider header'>Step by step</h3>

                <HitChart />
            </div>
        );    
    }
};

export default Rules;