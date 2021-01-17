import thunk from "redux-thunk";
import rootReducer from "../src/reducer/rootReducer";
import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export {
    store,
};