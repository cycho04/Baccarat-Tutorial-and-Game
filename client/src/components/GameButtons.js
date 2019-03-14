import React from 'react';
import axios from 'axios';
import deck from '../modules/deck';
import { connect } from 'react-redux';
import { addDeck, getCurrentHand, storeDeckId } from '../actions';

class GameButtons extends React.Component {
    //new game
    newShoe = () => {
        //create 8 deck shoe
        const fullDeck = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

        // Checks for old deck and deletes it if it exists.
        if(this.props.state.deckId){
            //DESTROY the old deck (prevent overloading the db)
            axios.delete(`http://localhost:5000/board/${this.props.state.deckId}`);    
        }

        //CREATE new full deck
        axios.post('http://localhost:5000/board',{
            banker: [],
            player: [],
            history: [],
            deck: fullDeck,
            money: 1000
        })
            .then((res) => {
                //stores in redux
                this.props.storeDeckId(res.data._id);
                this.props.addDeck(res.data.deck); 
                this.props.getCurrentHand([]);
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
        this.props.getCurrentHand(hand);

        //UPDATES database
        axios.put(`http://localhost:5000/board/${this.props.state.deckId}`, {
            banker: [hand[0],hand[1]],
            player: [hand[2],hand[3]],
            history: [],
            deck: this.props.state.deck,
            money: 1000
        })
        console.log(this.props.state)
    }

    handleClear = () => {
        axios.put(`http://localhost:5000/board/${this.props.state.deckId}`, {
            banker: [],
            player: [],
            history: [],
            deck:this.props.state.deck,
            money: 1000
        });
        //dispatch
        this.props.getCurrentHand([]);
    }

    render(){
        return(
            <div>
                <button className='ui blue button' onClick={this.newShoe}>New Shoe</button>
                <button className='ui red button' onClick={this.handleClear}>Clear Cards</button> 
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

export default connect(mapStateToProps, { addDeck, getCurrentHand, storeDeckId })(GameButtons);