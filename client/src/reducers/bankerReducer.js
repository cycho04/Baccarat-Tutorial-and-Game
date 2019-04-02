export default (state=[{value: '0', src: './images/Gray.jpg'}, {value: '0', src: './images/Gray.jpg'}], action) => {
    switch(action.type){
        case 'BANKER':
            return action.payload;
        case 'UPDATE_BANKER':
            return [...state, action.payload]
        default:
            return state;
    };
};