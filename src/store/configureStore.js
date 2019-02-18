/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import contentReducer from '../reducers/content';

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => (
    createStore(
        combineReducers({
            content: contentReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    )
);
