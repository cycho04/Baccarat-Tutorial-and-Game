//current deck status
export const addDeck = (arr) => {
    return {
        type: 'DECK',
        payload: arr
    }
}

export const getCurrentHand = (arr) => {
    return {
        type: 'CURRENT_HAND',
        payload: arr
    }
}