import {GET_POPULAR_PEN, GET_POPULAR_SUC, GET_POPULAR_ERR} from '../actions/movieActions'


export const initialState = {
    pending: false,
    movies: [],
    error: null
}

export default function movieReducer(state=initialState, action) {
    switch(action.type) {
        case GET_POPULAR_PEN:
            return {
                ...state,
                pending: true
            }
        case GET_POPULAR_SUC:
            return {
                ...state,
                pending: false,
                movies: action.payload
            }
        case GET_POPULAR_ERR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getPopular = state => state.movies;
export const getPopularPending = state => state.pending;
export const getPopularError = state => state.error;