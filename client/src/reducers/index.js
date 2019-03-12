import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import deckReducer from './deckReducer';
import currentHandReducer from './currentHandReducer';

export default combineReducers({
    test: TestReducer,
    deck: deckReducer,
    currentHand: currentHandReducer
});