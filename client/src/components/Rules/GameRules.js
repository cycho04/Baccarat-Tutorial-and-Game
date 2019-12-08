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

const GameRules = () => {

    return (
      <>
      <GlobalStyle />
      <RulesWrapper>
        <h1>How to Play <FontAwesomeIcon icon={faLightbulb} /></h1>

        <Intro />
        <FromTheTop/>          
        <ValuesAndCounting />
        <HowToWin />
        <HitChart />

      </RulesWrapper>

      </>
    );

}

export default GameRules;
