export default(state=[], action) => {
    switch(action.type){
        case 'DECK':
            return action.payload;
        default:
            return state;
    };
};