export default (state ='a', action) => {
    switch(action.type){
        case ('DECK_ID'):
            return action.payload
        default:
            return state
    };
};