export default (state=[], action) => {
    switch(action.type){
        case 'CURRENT_HAND':
            return action.payload;
        default:
            return state;
    };
};