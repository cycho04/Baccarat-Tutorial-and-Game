import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addDeck, getCurrentHand, storeDeckId } from '../actions';
import Cards from './Cards';
import GameButtons from './GameButtons';


class Game extends React.Component {

    //fetches previous game/board when Game loads.
    componentDidMount(){
        document.body.style.backgroundImage = 'radial-gradient(#52c234, #061700)';
        //initially fetches all board data and filters the previously played one.
        //READ
        axios.get(`http://localhost:5000/board`)
            .then((res) => {
                const unfinishedDeck = res.data.filter((game) => game.current === true)
                //dispatch
                this.props.storeDeckId(unfinishedDeck[0]._id);
                this.props.addDeck(unfinishedDeck[0].deck); 
                this.props.getCurrentHand([...unfinishedDeck[0].banker, ...unfinishedDeck[0].player]);
            })
    }
    render(){
        return (
            <div>
                <Cards banker={this.props.state.banker} player={this.props.state.player}/>
                <GameButtons />
            </div>
        );    
    }
};

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps, { addDeck, getCurrentHand, storeDeckId })(Game);