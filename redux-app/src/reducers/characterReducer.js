import { GET_DATA, UPDATE_STATE } from '../actions/index'

const initialState = {
    characters:[],
    isFetching: false,
};

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:          
            return {
                ...state,
                isFetching: true,
            }
        case UPDATE_STATE:
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}