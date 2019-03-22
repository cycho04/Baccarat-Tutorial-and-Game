import React from 'react';

import HitChart from './HitChart';

const Rules = () => {
    document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80")';
    document.body.style.backgroundRepeat='no-repeat';
    document.body.style.backgroundPosition='center';
    document.body.style.backgroundSize='cover';
    return(
        <div className='ui container'>
            <h1>How to Play <i className='ui lightbulb outline icon'/></h1>
            <h4 className='ui horizontal divider header'>
                Intro
            </h4>
            <div>
                <p>
                    Baccarat, also known as punto banco, is one of the oldest and most popular games in casinos all over the world. 
                    It is especially popular among high-rollers and Asian gamblers. In Macau, baccarat is extremely dominant. 
                    Although the game seems serious and elegant, it is really as simple as betting on the flip of a coin.
                </p>
            </div>

            <h4 className='ui horizontal divider header'>
                Basics
            </h4>
            <div>
                <p>
                    Baccarat is a card game that is dealt from a shoe that holds 6 or 8 decks of cards. 
                    Two hands are dealt by the house dealer, the "banker" hand and the "player" hand. 
                    Before the hands are dealt, bets may be placed on the banker hand, on the player hand, or on a tie.
                    The value of a hand is determined by adding the values of its individual cards. 
                    Tens and face cards are counted as zero, while all other cards are counted by the number of "pips" on the card face. 
                    Only the last digit of the total is used, so all baccarat hands have values in the range 0 to 9 inclusive. 
                    The hand with the higher value wins; if the hands have the same value, the result is a tie.

                    Each side is dealt a card.
                </p>
                card delivery
                definitions (naturals)
                values
            </div>
            

            <h4 className='ui horizontal divider header'>
                Step by step
            </h4>

            <HitChart />
        </div>
    );
};

export default Rules;