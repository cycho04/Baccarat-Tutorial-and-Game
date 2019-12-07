import React from "react";

import HitChart from "./HitChart/HitChart";
import "./GameRules.css";
import {GlobalStyle, RulesWrapper } from './GameRules.style';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Intro from './Intro/Intro';
import FromTheTop from './FromTheTop/FromTheTop';
import ValuesAndCounting from './ValuesAndCounting/ValuesAndCounting';
import HowToWin from './HowToWin/HowToWin';

class GameRules extends React.Component {
  state = { first: false, second: false, third: false, fourth: false };

  renderCard = () => {
    setTimeout(() => {
      this.setState({ first: true });
    }, 500);
    setTimeout(() => {
      this.setState({ second: true });
    }, 1500);
    setTimeout(() => {
      this.setState({ third: true });
    }, 2500);
    setTimeout(() => {
      this.setState({ fourth: true });
    }, 3500);
    setTimeout(() => {
      this.setState({
        first: false,
        second: false,
        third: false,
        fourth: false
      });
    }, 5000);
  };

  render() {
    return (
      <>
      <GlobalStyle />
      <RulesWrapper>
        <h1>How to Play <FontAwesomeIcon icon={faLightbulb} /></h1>

        <Intro />

        <h4 className="ui horizontal divider header">Basics</h4>
        <div className="ui piled segment">
          <FromTheTop first={this.state.first} second={this.state.second} third={this.state.third} fourth={this.state.fourth} renderCard={this.renderCard}/>          
          <ValuesAndCounting />
          <HowToWin />
        </div>
        
        <HitChart />

      </RulesWrapper>

      </>
    );
  }
}

export default GameRules;
