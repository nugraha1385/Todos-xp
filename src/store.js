/**
 * Created by Indrap on 28/11/2017.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todoReducer'
import thunk from "redux-thunk";
export default createStore(
    combineReducers({todoReducer}),[],
    applyMiddleware(thunk)
);