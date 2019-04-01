import React from 'react';
import { connect } from 'react-redux';

const baccaratCount = total => {
    if(total >= 10 && total < 20){
        return total - 10;
    }
    else if (total >= 20){
        return total - 20;
    }
    else {
        return total;
    }
}

const Score = props => {

    
    return(
        <div>
            <h1>Baccarat</h1>
            <h1>Game</h1>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Score);