import {
    PUT_POKEDEX
} from '../utility/actionTypes'

export default (state = {}, action) => {
    const { type, data, error } = action
    switch (type) {
        // Update Pokedex
        case PUT_POKEDEX.SUCCESS:
            return {
                data,
                pending: false,
                error: null
            }
        case PUT_POKEDEX.PENDING:
            return {
                ...state,
                pending: true,
            }
        case PUT_POKEDEX.FAILURE:
            return {
                error,
                pending: false
            }
        default:
            return state
    }
}