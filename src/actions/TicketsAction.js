import axiosWithAuth from '../utils/axiosWithAuth';

export const TICKETS_LOADING = 'TICKETS_LOADING';
export const TICKETS_SUCCESS = 'TICKETS_SUCCESS';
export const TICKETS_FAILURE = 'TICKETS_FAILURE';

export const getTickets = () => dispatch => {
    dispatch({ type: TICKETS_LOADING });
    console.log("Reaching tickets action")
    axiosWithAuth()
        .get("/tickets")
        .then(res => {
            console.log(res);
            dispatch({ type: TICKETS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: TICKETS_FAILURE, payload: err.data })
        })
}