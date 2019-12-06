import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { fadeIn, fadeOut } from "react-animations";

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

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: radial-gradient(#53a318, #348700);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    animation: 1s ${fadeOutAnimation};
  }
`

const GameWrapper = styled.div`
  text-align: center;
  animation: 1s ${fadeInAnimation};
  height: 80vh;
`;

class Game extends React.Component {
  //fetches previous game/board when Game loads.
  componentDidMount() {
    //initially fetches all board data and filters the previously played one.
    //READ
    axios.get(`/board`).then(res => {
      const unfinishedDeck = res.data.filter(game => game.current === true);
      //dispatch
      this.props.storeDeckId(unfinishedDeck[0]._id);
      this.props.addDeck(unfinishedDeck[0].deck);
      this.props.getCurrentHand([
        ...unfinishedDeck[0].banker,
        ...unfinishedDeck[0].player
      ]);
      this.props.getBanker(res.data[0].banker);
      this.props.getPlayer(res.data[0].player);
    });
  }

  componentWillUnmount(){
    
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <GameWrapper className="ui container">
        <Score />
        <Cards />
        <GameButtons />
      </GameWrapper>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { addDeck, getCurrentHand, storeDeckId, getBanker, getPlayer }
)(Game);
