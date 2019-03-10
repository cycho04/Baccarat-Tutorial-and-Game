import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Main from './Main';

class App extends Component{

    render(){
        return(
            <div>
                <Header />
                <Main />
            </div>
        )
    };
};

export default App;