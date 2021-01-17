import api from './pokedexApi'

//Get Pokedex api
export const getPokedex = () => {
    return api.get(`/api/cards`)
}
