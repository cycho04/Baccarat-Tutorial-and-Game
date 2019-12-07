import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

const Score = props => {

    const { banker, player } = props;

    const baccaratNumbers = (value) => {
        if(value >= 20){
            return value - 20
        }
        else if(value >= 10){
            return value - 10
        }
        else{
            return value
        }
    }

    const determineWinner = (player, banker) => {
        if (player > banker){
            return 'PLAYER WINS!!'
        }
        else if (banker > player){
            return 'BANKER WINS!!'
        }
        else if (banker === player){
            return "IT'S A TIE!!"
        }
    }

    const bankerValues = banker[0] !== undefined ? banker.map((card) => card.value || 0) : 0
    const bankerTotal = banker[0] !== undefined ? baccaratNumbers(bankerValues.reduce((total, current) => total + current)) : 0
    const playerValues = player[0] !== undefined ? player.map((card) => card.value || 0) : 0
    const playerTotal = player[0] !== undefined ?  baccaratNumbers(playerValues.reduce((total, current) => total + current)) : 0
    
    return(
        <div>
            <h1>{determineWinner(playerTotal, bankerTotal)}</h1>
            <h1>{`${bankerTotal} / ${playerTotal}`}</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        banker: state.banker,
        player: state.player
    }
}

Score.propTypes = {
    banker: PropTypes.array,
    player: PropTypes.array
}

export default connect(mapStateToProps)(Score);