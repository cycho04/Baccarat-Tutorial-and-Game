import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { connect } from "react-redux";

import {
  addDeck,
  getCurrentHand,
  storeDeckId,
  getBanker,
  getPlayer
} from "../../actions";
import Cards from "../Cards/Cards";
import GameButtons from "../GameButtons/GameButtons";
import Score from "../Score/Score";
import {GlobalStyle, GameWrapper} from './Game.style';


class Game extends React.Component {
 

  //fetches previous game/board when Game loads.
  componentDidMount() {

    const { storeDeckId, addDeck, getCurrentHand, getPlayer,getBanker} = this.props;

    //initially fetches all board data and filters the previously played one.
    //READ
    axios.get(`/board`).then(res => {
      const unfinishedDeck = res.data.filter(game => game.current === true);
      //dispatch
      storeDeckId(unfinishedDeck[0]._id);
      addDeck(unfinishedDeck[0].deck);
      getCurrentHand([
        ...unfinishedDeck[0].banker,
        ...unfinishedDeck[0].player
      ]);
      getBanker(res.data[0].banker);
      getPlayer(res.data[0].player);
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <GameWrapper>
          <Score />
          <Cards />
          <GameButtons />
        </GameWrapper>
      </>
    );
  }
}

const mapDispatchToProps = {
  addDeck,
  getCurrentHand,
  storeDeckId,
  getBanker,
  getPlayer
}

Game.propTypes = {
  addDeck: PropTypes.func,
  getCurrentHand: PropTypes.func,
  storeDeckId: PropTypes.func,
  getBanker: PropTypes.func,
  addPlayer: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Game);
