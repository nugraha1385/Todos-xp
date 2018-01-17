/**
 * Created by Indrap on 28/11/2017.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todoReducer'

export default createStore(
    combineReducers({todoReducer}),
     /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware()
);