import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addDeck, getCurrentHand, storeDeckId, getBanker, getPlayer } from '../actions';
import Cards from './Cards';
import GameButtons from './GameButtons';
import Score from './Score';


class Game extends React.Component {

    //fetches previous game/board when Game loads.
    componentDidMount(){
        document.body.style.backgroundImage = 'radial-gradient(#52c234, #061700)';
        //initially fetches all board data and filters the previously played one.
        //READ
        axios.get(`/board`)
            .then((res) => {
                const unfinishedDeck = res.data.filter((game) => game.current === true)
                //dispatch
                this.props.storeDeckId(unfinishedDeck[0]._id);
                this.props.addDeck(unfinishedDeck[0].deck); 
                this.props.getCurrentHand([...unfinishedDeck[0].banker, ...unfinishedDeck[0].player]);
                this.props.getBanker(res.data[0].banker);
                this.props.getPlayer(res.data[0].player);
            })
    }

    render(){
        return (
            <div className='ui container game-center'>
                <Score />
                <Cards />
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

export default connect(mapStateToProps, { addDeck, getCurrentHand, storeDeckId, getBanker, getPlayer })(Game);