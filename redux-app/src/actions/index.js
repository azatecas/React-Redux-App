import axios from 'axios';
export const GET_DATA = "GET_DATA";
export const UPDATE_STATE = "UPDATE_STATE"

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(res => {
            console.log(res.data.results);
            dispatch({type: UPDATE_STATE, payload: res.data.results});
        })
        .catch(err => console.log(err))

}