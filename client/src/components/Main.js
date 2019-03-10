import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rules from './Rules';
import Game from './Game';
import ScoreBoard from './ScoreBoard';
import LandingPage from './LandingPage';
import NoMatch from './NoMatch';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/rules' component={Rules}/>
            <Route exact path='/game' component={Game}/>
            <Route exact path='/scoreboard' component={ScoreBoard}/>
            <Route component={NoMatch}/>
        </Switch>
    );
};

export default Main;