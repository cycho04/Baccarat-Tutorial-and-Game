import {
    DECK,   
    CURRENT_HAND,
    BANKER,
    PLAYER,
    UPDATE_BANKER,
    UPDATE_PLAYER,
    DECK_ID
} from './types';


//current deck status
export const addDeck = (arr) => {
    return {
        type: DECK,
        payload: arr
    }
}

export const getCurrentHand = (arr) => dispatch => {
    //action returns a promise, access the state after update using .then()
    return new Promise((resolve) => {
        dispatch({
            type: CURRENT_HAND,
            payload: arr    
        });
        dispatch({
            type: BANKER,
            payload: [arr[0], arr[1]]
        });
        dispatch({
            type: PLAYER,
            payload: [arr[2], arr[3]]
        });
        resolve()
    })
}

export const updateBanker = (card) => {
    return{
        type: UPDATE_BANKER,
        payload: card
    }
}
export const getBanker = (card) => {
    return{
        type: BANKER,
        payload: card
    }
}

export const updatePlayer = (card) => {
    return{
        type: UPDATE_PLAYER,
        payload: card
    }
}
export const getPlayer = (card) => {
    return{
        type: PLAYER,
        payload: card
    }
}

export const storeDeckId = (id) => {
    return {
        type: DECK_ID,
        payload: id
    }
}