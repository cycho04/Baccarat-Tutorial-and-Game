import { combineReducers } from 'redux';
import deckIdReducer from './deckIdReducer';
import deckReducer from './deckReducer';
import currentHandReducer from './currentHandReducer';
import bankerReducer from './bankerReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    deckId: deckIdReducer,
    deck: deckReducer,
    currentHand: currentHandReducer,
    banker: bankerReducer,
    player: playerReducer
});