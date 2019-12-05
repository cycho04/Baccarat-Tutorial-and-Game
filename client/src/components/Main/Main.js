import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GameRules from '../Rules/GameRules';
import Game from '../Game/Game';
import LandingPage from '../LandingPage/LandingPage';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/rules' component={GameRules}/>
            <Route exact path='/game' component={Game}/>
        </Switch>
    );
};

export default Main;