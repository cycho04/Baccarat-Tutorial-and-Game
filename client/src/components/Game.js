import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Cards from './Cards';
import GameButtons from './GameButtons';


class Game extends React.Component {

    //fetches board when Game loads.
    componentDidMount(){
        //initially fetches all board data.
        //READ
        axios.get('http://localhost:5000/board')
            .then((res) => {
                console.log('GET REQUEST',res.data)
            })
    }
    render(){
        return (
            <div>
                <Cards currentHand={this.props.state.currentHand}/>
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

export default connect(mapStateToProps)(Game);