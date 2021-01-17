import { getPokedex } from "../service/pokedexServer"
import * as actionTypes from '../utility/actionTypes';

//Get Pokedex
export const pokedexPending = () => {
  return { type: actionTypes.GET_POKEDEX.PENDING }
}
export const pokedexSuccess = (message) => {
  return {
    type: actionTypes.GET_POKEDEX.SUCCESS,
    data: {
      ...message,
    }
  }
}
export const pokedexFailure = (error) => {
  return {
    type: actionTypes.GET_POKEDEX.FAILURE,
    error: error
  }
}
export const pokedex = () => dispatch => {
  dispatch(pokedexPending())
  return getPokedex() // get api pokedex
    .then(result => {
      dispatch(pokedexSuccess(result.data))
    })
    .catch(error => {
      dispatch(pokedexFailure(null))
    })
}


// Update Pokedex
export const updatePokedexPending = () => {
  return { type: actionTypes.PUT_POKEDEX.PENDING }
}
export const updatePokedexSuccess = (message) => {
  return {
    type: actionTypes.PUT_POKEDEX.SUCCESS,
    data: message,
  }
}
export const updatePokedexFailure = (error) => {
  return {
    type: actionTypes.PUT_POKEDEX.FAILURE,
    error: error
  }
}

export const updatePokedex = (data) => dispatch => {
  dispatch(updatePokedexPending())
  if (data) {
    return (dispatch(updatePokedexSuccess(data)))
  }
  else {
    return (dispatch(updatePokedexFailure(null)))
  }

}