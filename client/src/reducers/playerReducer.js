export default (state=['sample'], action) => {
    switch(action.type){
        case 'PLAYER':
            return action.payload;
        case 'UPDATE_PLAYER':
            return [...state, action.payload];
        default:
            return state;
    };
};