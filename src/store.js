import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));