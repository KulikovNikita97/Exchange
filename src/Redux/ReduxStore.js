import { applyMiddleware, combineReducers, createStore } from "redux";
import ChartsReducer from './ChartsReducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    ChartsReducer: ChartsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;