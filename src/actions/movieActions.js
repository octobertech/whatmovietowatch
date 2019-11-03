import axios from 'axios'
import { API_KEY, API_URL } from '../config/tmdb'

export const GET_POPULAR_PEN = "GET_POPULAR_PEN"
export const GET_POPULAR_SUC = "GET_POPULAR_SUC"
export const GET_POPULAR_ERR = "GET_POPULAR_ERR"

function getPopularPending() {
    return {
        type: GET_POPULAR_PEN
    }
}

function getPopularSuccess(movies) {
    return {
        type: GET_POPULAR_SUC,
        movies
    }
}

function getPopularError(error) {
    return {
        type: GET_POPULAR_ERR,
        error
    }
}

function getPopular(pagenum) {
    return dispatch => {
        dispatch(getPopularPending());
        axios.get(`${API_URL}/movie/popular${API_KEY}&page=${pagenum}`)
        .then(response => {
            getPopularSuccess(response.data.results)
          }, e => { getPopularError(e) })
    }
}

export default getPopular;