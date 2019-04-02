import React from 'react';
import { connect } from 'react-redux';



const Score = props => {

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

    const bankerValues = props.state.banker[0] !== undefined ? props.state.banker.map((card) => card.value || 0) : 0
    const bankerTotal = props.state.banker[0] !== undefined ? baccaratNumbers(bankerValues.reduce((total, current) => total + current)) : 0
    const playerValues = props.state.player[0] !== undefined ? props.state.player.map((card) => card.value || 0) : 0
    const playerTotal = props.state.player[0] !== undefined ?  baccaratNumbers(playerValues.reduce((total, current) => total + current)) : 0
    
    return(
        <div>
            <h1>{determineWinner(playerTotal, bankerTotal)}</h1>
            <h1>{`${bankerTotal} / ${playerTotal}`}</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Score);