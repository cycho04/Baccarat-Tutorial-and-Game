//current deck status
export const addDeck = (arr) => {
    return {
        type: 'DECK',
        payload: arr
    }
}

export const getCurrentHand = (arr) => dispatch => {
    //action returns a promise, access the state after update using .then()
    return new Promise((resolve, reject) => {
        dispatch({
            type: 'CURRENT_HAND',
            payload: arr    
        });
        resolve()
    })
}

export const storeDeckId = (id) => {
    return {
        type: 'DECK_ID',
        payload: id
    }
}