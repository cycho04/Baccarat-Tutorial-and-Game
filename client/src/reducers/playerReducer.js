export default (state=['sample'], action) => {
    switch(action.type){
        case 'PLAYER':
            return action.payload;
        case 'PLAYER_UPDATE':
            return [...state, action.payload];
        default:
            return state;
    };
};