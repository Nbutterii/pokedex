import { combineReducers } from "redux";
import pokedexReducer from './pokedexReducer';
import updatePokedex from './updatePokedex';

const rootReducer = combineReducers({
    pokedex: pokedexReducer,
    updatePokedex: updatePokedex,
})

export default rootReducer