import React from 'react';
import axios from 'axios';
import deck from '../modules/deck';
import { connect } from 'react-redux';
import { addDeck, getCurrentHand } from '../actions';

class GameButtons extends React.Component {
    //new game
    newShoe = () => {
        //create 8 deck shoe
        const fullDeck = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

        //CREATE new full deck
        axios.post('http://localhost:5000/board',{
            deck: fullDeck 
        }) 
    }

    //draws 4 random cards, removes picked cards. Need to implement SHOW request for current deck
    nextHand = () => {
        let testArr = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck, ...deck];
        let randomNumber = []; //stores the randomly picked number
        let hand = []; //stores the first 4 hands
       
        //draw new cards
        for(let i = 0; i < 4; i++){
            randomNumber = [...randomNumber, Math.floor(Math.random() * testArr.length)]; //creates a random number
            hand = [...hand, testArr[randomNumber[i]]]; //uses ^ as index to pick random cards into hand =[]
            testArr = testArr.filter((ele, ii) => ii !== randomNumber[i]) //removes the picked card.
        } 
        this.props.addDeck(testArr); 
        this.props.getCurrentHand(hand);
    }

    handleRead = () => {
        //SHOW
        axios.get('http://localhost:5000/board/5c7fbc2411bc3d0c20e437+39')
            .then((res)=>{
                console.log("SHOW", res.data)
            })
    }

    handleUpdate = () => {
        axios.put('http://localhost:5000/board/5c7fbc2411bc3d0c20e43739', {
            history: [0,1,0]
        })
    }

    handleDestroy = () => {
        axios.delete('http://localhost:5000/board/5c7fbd6e11bc3d0c20e4373a');
    }

    render(){
        return(
            <div>
                <button className='ui button' onClick={this.newShoe}>New Shoe</button>
                <button className='ui button' onClick={this.nextHand}>Next Hand</button>
                <button className='ui button' onClick={this.handleRead}>Read</button>
                <button className='ui button' onClick={this.handleUpdate}>Update</button>
                <button className='ui button' onClick={this.handleDestroy}>Destroy</button>    
            </div>
        )    
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
};

export default connect(mapStateToProps, { addDeck, getCurrentHand })(GameButtons);