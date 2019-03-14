import { combineReducers } from 'redux';
import deckIdReducer from './deckIdReducer';
import deckReducer from './deckReducer';
import currentHandReducer from './currentHandReducer';

export default combineReducers({
    deckId: deckIdReducer,
    deck: deckReducer,
    currentHand: currentHandReducer
});