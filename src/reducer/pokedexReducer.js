import {
    GET_POKEDEX
} from '../utility/actionTypes'

export default (state = {}, action) => {
    const { type, data, error } = action
    switch (type) {
        // Get Pokedex
        case GET_POKEDEX.SUCCESS:
            return {
                ...data,
                pending: false,
                error: null
            }
        case GET_POKEDEX.PENDING:
            return {
                ...state,
                pending: true,
            }
        case GET_POKEDEX.FAILURE:
            return {
                error,
                pending: false
            }
        default:
            return state
    }
}