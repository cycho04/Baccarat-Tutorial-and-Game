export default (state=['sample'], action) => {
    switch(action.type){
        case 'BANKER':
            return action.payload;
        case 'UPDATE_BANKER':
            return [...state, action.payload]
        default:
            return state;
    };
};