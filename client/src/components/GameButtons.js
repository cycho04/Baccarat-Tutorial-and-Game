import React from 'react';
import axios from 'axios';
import deck from '../modules/deck';
import { connect } from 'react-redux';

import { addDeck, getCurrentHand, storeDeckId, updateBanker, updatePlayer, getBanker, getPlayer } from '../actions';
import './styles/Game.css';

class GameButtons extends React.Component {

    //returns the ones digit if num1 + num2 is over 10
    baccaratCount = (num1, num2) => {
        const total = num1 + num2;
            if (total >= 10){
                return total - 10;
            }
        return total;//else
    } 

    //new game
    newShoe = () => {
        //create 8 deck shoe
        const fullDeck = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

        // Checks for old deck and deletes it if it exists.
        if(this.props.state.deckId){
            //DESTROY the old deck (prevent overloading the db)
            axios.delete(`/board/${this.props.state.deckId}`);    
        }

        //CREATE new full deck
        axios.post('/board',{
            banker: [{value: 0, src: './images/Gray.jpg'}, {value: 0, src: './images/Gray.jpg'}],
            player: [{value: 0, src: './images/Gray.jpg'}, {value: 0, src: './images/Gray.jpg'}],
            history: [],
            deck: fullDeck,
            money: 1000
        })
            .then((res) => {
                //stores in redux
                this.props.storeDeckId(res.data._id);
                this.props.addDeck(res.data.deck); 
                this.props.getBanker([{value: 0, src: './images/Gray.jpg'},{value: 0, src: './images/Gray.jpg'}]);
                this.props.getPlayer([{value: 0, src: './images/Gray.jpg'},{value: 0, src: './images/Gray.jpg'}]);
            })
    }

    //draws 4 random cards, removes picked cards
    dealNextHand = () => {   
        let usedDeck = this.props.state.deck;// dummy deck to modify and dispatch to redux
        let randomNumber = []; //stores the randomly picked number
        let hand = []; //stores the 4  selected cards
       
        //draw new cards
        for(let i = 0; i < 4; i++){
            randomNumber = [...randomNumber, Math.floor(Math.random() * usedDeck.length)]; //creates a random number
            hand = [...hand, usedDeck[randomNumber[i]]]; //uses ^ as index to pick random cards into hand =[]
            usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumber[i]) //removes the picked card.
        } 
        //dispatch
        this.props.addDeck(usedDeck); 
        this.props.getCurrentHand(hand)
            .then(() => {
                const bankerTotal = this.baccaratCount(this.props.state.banker[0].value, this.props.state.banker[1].value);
                const playerTotal = this.baccaratCount(this.props.state.player[0].value, this.props.state.player[1].value);
                this.hitOrStay(bankerTotal, playerTotal);
            })

        //UPDATES database
        axios.put(`/board/${this.props.state.deckId}`, {
            banker: [hand[0],hand[1]],
            player: [hand[2],hand[3]],
            history: [],
            deck: this.props.state.deck,
            money: 1000
        })
    }

    //Hit charts
    hitOrStay = (banker, player) => {
        //check naturals
        if( banker >= 8 || player >= 8){
            console.log("Natural")
        }
        //check for 6,7 for both
        else if( banker >= 6 && player >= 6){
            console.log('both 6+, no more hit')
        }
        else if(player <= 5){
            console.log('hit player side')
            let usedDeck = this.props.state.deck;// dummy deck to modify and dispatch to redux
            let randomNumber = Math.floor(Math.random() * usedDeck.length); //stores the randomly picked number
            let randomNumberBanker = 0;
            let bankerHitCard = {};
            let playerHitCard = usedDeck[randomNumber]; //stores the selected card
            usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumber)
            
            if(banker < 3){
                console.log('<= 2 always hit banker');
                randomNumberBanker = Math.floor(Math.random() * usedDeck.length);
                bankerHitCard = usedDeck[randomNumberBanker];
                usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumberBanker);
            }
            else if( banker === 3 && playerHitCard.value !== 8){
                console.log('38 special hit');
                randomNumberBanker = Math.floor(Math.random() * usedDeck.length);
                bankerHitCard = usedDeck[randomNumberBanker];
                usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumberBanker);
            }
            else if (banker === 4 && (playerHitCard.value > 1 && playerHitCard.value < 8 )){
                console.log('banker is 4 and player hit card is 4-7');
                randomNumberBanker = Math.floor(Math.random() * usedDeck.length);
                bankerHitCard = usedDeck[randomNumberBanker];
                usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumberBanker);
            }
            else if(banker === 5 && (playerHitCard.value > 3 && playerHitCard.value < 8 )) {
                console.log('banker is 5 and player hit card is 4-7');
                randomNumberBanker = Math.floor(Math.random() * usedDeck.length);
                bankerHitCard = usedDeck[randomNumberBanker];
                usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumberBanker);
            }
            else if(banker === 6 && (playerHitCard.value === 6 || playerHitCard.value === 7) ){
                console.log('banker is 6 and hit card is 6 or 7');
                randomNumberBanker = Math.floor(Math.random() * usedDeck.length);
                bankerHitCard = usedDeck[randomNumberBanker];
                usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumberBanker);
            }
            else {
                console.log('banker doesnt hit');
            }
            this.props.addDeck(usedDeck); 
            this.props.updatePlayer(playerHitCard);
            this.props.updateBanker(bankerHitCard);
            axios.put(`/board/${this.props.state.deckId}`, {
                banker: this.props.state.banker, 
                player: this.props.state.player,
                history: [],
                deck: this.props.state.deck,
                money: 1000
            });
        }
        //one hit to banker side.
        else if(banker <= 5){
            console.log('stay on player, hit banker side')
            let usedDeck = this.props.state.deck;// dummy deck to modify and dispatch to redux
            let randomNumber = Math.floor(Math.random() * usedDeck.length); //stores the randomly picked number
            let bankerHitCard = usedDeck[randomNumber]; //stores the selected card
            usedDeck = usedDeck.filter((ele, ii) => ii !== randomNumber)
            this.props.addDeck(usedDeck); 
            this.props.updateBanker(bankerHitCard);
            //updates database. need to find more effective way. only needs to update banker, but currently cant find solution.
            axios.put(`/board/${this.props.state.deckId}`, {
                banker: this.props.state.banker, 
                player: this.props.state.player,
                history: [],
                deck: this.props.state.deck,
                money: 1000
            });
        }
        else {
            console.log('error, hand not recognized');
        }
    }


    render(){
        return(
            <div className='game-center'>
                <button className='ui blue button' onClick={this.newShoe}>New Shoe</button>
                <button className='ui green button' onClick={this.dealNextHand}>Deal Next Hand</button>
            </div>
        )    
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
};

export default connect(mapStateToProps, { addDeck, getCurrentHand, storeDeckId, updateBanker, updatePlayer, getBanker, getPlayer })(GameButtons);