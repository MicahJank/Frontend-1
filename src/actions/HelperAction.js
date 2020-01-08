import axiosWithAuth from '../utils/axiosWithAuth';
import {
    TICKETS_LOADING,
    TICKETS_SUCCESS,
    TICKETS_FAILURE,
    TICKET_POST_SUCCESS,
    TICKET_PUT_SUCCESS,
    TICKET_ACCEPT_SUCCESS
} from '../actions';

// export const HELPER_ACCEPT_SUCCESS = 'HELPER_ACCEPT_SUCCESS';
// export const HELPER_REOPEN_SUCCESS = 'HELPER_POST_SUCCESS';
export const HELPER_PUT_SUCCESS = 'HELPER_PUT_SUCCESS';

// export const getTickets = () => dispatch => {
//     dispatch({ type: TICKETS_LOADING });
//     console.log("Reaching tickets action")
//     axiosWithAuth()
//         .get("/tickets")
//         .then(res => {
//             console.log("Getting response data", res.data);
//             dispatch({ type: TICKETS_SUCCESS, payload: res.data })
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch({ type: TICKETS_FAILURE, payload: err.data })
//         })
// }

export const acceptHelper = (id) => dispatch => {
    dispatch({ type: TICKETS_LOADING });
    console.log("accepting");
    axiosWithAuth()
        .put(`/tickets/${id}/accept`)
        .then(res => {
            dispatch({ type: HELPER_PUT_SUCCESS, payload: res.data });
            console.log("After accepting a ticket", res);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: TICKETS_FAILURE, payload: err.data });
        })
}

export const openHelper = (id) => dispatch => {
    dispatch({ type: TICKETS_LOADING });
    console.log("reopening");
    axiosWithAuth()
        .put(`/tickets/${id}/reopen`)
        .then(res => {
            dispatch({ type: HELPER_PUT_SUCCESS, payload: res.data });
            console.log("After reopening a ticket", res);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: TICKETS_FAILURE, payload: err.data });
        })
}

export const resolveHelper = (id) => dispatch => {
    dispatch({ type: TICKETS_LOADING });
    console.log("resolving");
    axiosWithAuth()
        .put(`/tickets/${id}/resolve`)
        .then(res => {
            dispatch({ type: HELPER_PUT_SUCCESS, payload: res.data });
            console.log("After resolving a ticket", res);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: TICKETS_FAILURE, payload: err.data });
        })
}