import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

//if mapDispatchToProps has () => dispatch(requestRobots())
// below action must be written as 
// requestRobots = () => (dispatch) => {}
//
// redux-thunk needs actions to be functions to trigger
export const requestRobots = (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}